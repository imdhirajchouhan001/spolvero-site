// Two things done to a recording before it is exported, both entirely in the tab.
//
// The recorder page publishes loudness targets (−16 LUFS for spoken word, −14 for
// Spotify and YouTube). Publishing a number and then not measuring it would make
// the page a list of trivia, so this is the real measurement: ITU-R BS.1770-4
// integrated loudness, K-weighting and gating included, not a peak reading with a
// LUFS label on it.

/** One biquad, applied in place, direct form I. */
function biquad(x: Float32Array, b0: number, b1: number, b2: number, a1: number, a2: number): Float32Array {
  const y = new Float32Array(x.length);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
  for (let i = 0; i < x.length; i++) {
    const xn = x[i];
    const yn = b0 * xn + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2;
    x2 = x1; x1 = xn; y2 = y1; y1 = yn;
    y[i] = yn;
  }
  return y;
}

/**
 * The two-stage K-weighting filter from BS.1770-4.
 *
 * The standard tabulates its coefficients at 48 kHz only. Recordings here arrive at
 * whatever rate the microphone gave, so both stages are derived from their analogue
 * prototypes at the buffer's own rate instead of being pasted in and hoped for.
 */
function kWeight(input: Float32Array, sampleRate: number): Float32Array {
  // Stage 1: high shelf, +3.99984 dB at 1681.97 Hz.
  const f0 = 1681.974450955533;
  const G = 3.999843853973347;
  const Q1 = 0.7071752369554196;
  const K = Math.tan((Math.PI * f0) / sampleRate);
  const Vh = Math.pow(10, G / 20);
  const Vb = Math.pow(Vh, 0.4996667741545416);
  const a0 = 1 + K / Q1 + K * K;
  const shelf = biquad(
    input,
    (Vh + (Vb * K) / Q1 + K * K) / a0,
    (2 * (K * K - Vh)) / a0,
    (Vh - (Vb * K) / Q1 + K * K) / a0,
    (2 * (K * K - 1)) / a0,
    (1 - K / Q1 + K * K) / a0,
  );

  // Stage 2: high pass at 38.135 Hz, which is what removes rumble from the reading.
  const f2 = 38.13547087602444;
  const Q2 = 0.5003270373238773;
  const K2 = Math.tan((Math.PI * f2) / sampleRate);
  const d = 1 + K2 / Q2 + K2 * K2;
  return biquad(shelf, 1, -2, 1, (2 * (K2 * K2 - 1)) / d, (1 - K2 / Q2 + K2 * K2) / d);
}

/**
 * Integrated loudness in LUFS, or null when the take is too short to measure —
 * BS.1770 needs at least one full 400 ms block, and reporting a number for less
 * than that would be inventing one.
 */
export function integratedLoudness(buffer: AudioBuffer): number | null {
  const rate = buffer.sampleRate;
  const blockLen = Math.round(0.4 * rate);
  if (buffer.length < blockLen) return null;
  const hop = Math.round(blockLen / 4); // 75% overlap, as the standard specifies

  const filtered: Float32Array[] = [];
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    filtered.push(kWeight(buffer.getChannelData(c), rate));
  }
  // Channel weights: 1.0 for left and right. Surround weights do not arise here,
  // because a microphone capture is mono or stereo.
  const weight = 1.0;

  const blocks: number[] = [];
  for (let start = 0; start + blockLen <= buffer.length; start += hop) {
    let sum = 0;
    for (const ch of filtered) {
      let s = 0;
      for (let i = start; i < start + blockLen; i++) s += ch[i] * ch[i];
      sum += weight * (s / blockLen);
    }
    blocks.push(sum);
  }
  if (!blocks.length) return null;

  const loudnessOf = (mean: number) => -0.691 + 10 * Math.log10(mean);

  // Absolute gate at −70 LUFS.
  const above = blocks.filter((z) => z > 0 && loudnessOf(z) > -70);
  if (!above.length) return null;

  // Relative gate, 10 LU below the ungated mean of what survived the absolute gate.
  const mean = above.reduce((a, b) => a + b, 0) / above.length;
  const relative = loudnessOf(mean) - 10;
  const gated = above.filter((z) => loudnessOf(z) > relative);
  if (!gated.length) return null;

  return loudnessOf(gated.reduce((a, b) => a + b, 0) / gated.length);
}

export const peakOf = (buffer: AudioBuffer): number => {
  let peak = 0;
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const d = buffer.getChannelData(c);
    for (let i = 0; i < d.length; i++) {
      const v = Math.abs(d[i]);
      if (v > peak) peak = v;
    }
  }
  return peak;
};

const CEILING = Math.pow(10, -1 / 20); // −1 dBFS, left as headroom for the encoder

export type NormaliseResult = {
  buffer: AudioBuffer;
  /** What the take measured before the gain was applied. */
  measured: number | null;
  /** What it measures now. Below the target when the ceiling got in the way. */
  reached: number | null;
  gainDb: number;
  /** True when the full gain would have pushed the peak past −1 dBFS. */
  limited: boolean;
};

/**
 * Moves a recording to a loudness target by applying one gain to the whole thing.
 *
 * Deliberately not a compressor. Squashing the dynamics would make the number
 * easier to hit and the voice worse, so when the target cannot be reached without
 * going past −1 dBFS the gain stops there and the caller says so.
 */
export function normaliseTo(buffer: AudioBuffer, targetLufs: number, ctx: BaseAudioContext): NormaliseResult {
  const measured = integratedLoudness(buffer);
  if (measured === null || !Number.isFinite(measured)) {
    return { buffer, measured: null, reached: null, gainDb: 0, limited: false };
  }
  let gain = Math.pow(10, (targetLufs - measured) / 20);
  const peak = peakOf(buffer);
  let limited = false;
  if (peak * gain > CEILING) {
    gain = peak > 0 ? CEILING / peak : 1;
    limited = true;
  }
  const out = ctx.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate);
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const src = buffer.getChannelData(c);
    const dst = new Float32Array(src.length);
    for (let i = 0; i < src.length; i++) dst[i] = src[i] * gain;
    out.copyToChannel(dst, c);
  }
  const gainDb = 20 * Math.log10(gain);
  return { buffer: out, measured, reached: measured + gainDb, gainDb, limited };
}

export type TrimResult = {
  buffer: AudioBuffer;
  /** Seconds removed from the front and the back. */
  removedStart: number;
  removedEnd: number;
};

/**
 * Cuts the silence off both ends and nothing in the middle.
 *
 * Cutting pauses out of the middle is a different feature with a different risk:
 * it decides which of your pauses were deliberate. This one only removes the
 * fumbling before you started and the reach for the stop button after you finished,
 * and it leaves 150 ms of room so speech never starts on the first syllable.
 */
export function trimSilence(buffer: AudioBuffer, ctx: BaseAudioContext): TrimResult {
  const rate = buffer.sampleRate;
  const win = Math.max(1, Math.round(0.02 * rate));
  const hop = Math.max(1, Math.round(0.01 * rate));
  const pad = Math.round(0.15 * rate);

  const rms: number[] = [];
  for (let start = 0; start + win <= buffer.length; start += hop) {
    let sum = 0;
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const d = buffer.getChannelData(c);
      for (let i = start; i < start + win; i++) sum += d[i] * d[i];
    }
    rms.push(Math.sqrt(sum / (win * buffer.numberOfChannels)));
  }
  if (!rms.length) return { buffer, removedStart: 0, removedEnd: 0 };

  const loudestDb = 20 * Math.log10(Math.max(...rms) || 1e-9);
  // Relative to the take's own loudest moment, because a quiet recording has a
  // quiet noise floor too. The absolute floor stops a near-silent take from
  // deciding its own hiss counts as speech.
  const thresholdDb = Math.max(-50, loudestDb - 35);
  const isSpeech = (v: number) => 20 * Math.log10(v || 1e-9) > thresholdDb;

  const first = rms.findIndex(isSpeech);
  if (first === -1) return { buffer, removedStart: 0, removedEnd: 0 };
  let last = rms.length - 1;
  while (last > first && !isSpeech(rms[last])) last--;

  const startSample = Math.max(0, first * hop - pad);
  const endSample = Math.min(buffer.length, last * hop + win + pad);
  const len = endSample - startSample;
  if (len <= 0 || len === buffer.length) return { buffer, removedStart: 0, removedEnd: 0 };

  const out = ctx.createBuffer(buffer.numberOfChannels, len, rate);
  for (let c = 0; c < buffer.numberOfChannels; c++) {
    out.copyToChannel(buffer.getChannelData(c).slice(startSample, endSample), c);
  }
  return {
    buffer: out,
    removedStart: startSample / rate,
    removedEnd: (buffer.length - endSample) / rate,
  };
}
