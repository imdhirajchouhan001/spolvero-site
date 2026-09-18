// Conformance checks for the loudness measurement, run with `npm test`.
//
// The recorder page claims an ITU-R BS.1770-4 reading, and a claim like that is
// worth nothing unless something checks it. The first case is EBU Tech 3341 test 1
// — a stereo 1 kHz sine at −23 dBFS must measure −23.0 LUFS — which is the case a
// peak meter wearing a LUFS label fails.
import { integratedLoudness, trimSilence, normaliseTo, peakOf } from "@/lib/audio-cleanup";

class FakeBuffer {
  sampleRate: number; length: number; numberOfChannels: number; private data: Float32Array[];
  constructor(ch: number, len: number, rate: number) {
    this.numberOfChannels = ch; this.length = len; this.sampleRate = rate;
    this.data = Array.from({ length: ch }, () => new Float32Array(len));
  }
  getChannelData(i: number) { return this.data[i]; }
  copyToChannel(src: Float32Array, i: number) { this.data[i].set(src); }
  get duration() { return this.length / this.sampleRate; }
}
const ctx = { createBuffer: (c: number, l: number, r: number) => new FakeBuffer(c, l, r) } as any;

const sine = (channels: number, dbfs: number, rate = 48000, seconds = 20) => {
  const b = new FakeBuffer(channels, rate * seconds, rate);
  const amp = Math.pow(10, dbfs / 20);
  for (let c = 0; c < channels; c++) {
    const d = b.getChannelData(c);
    for (let i = 0; i < d.length; i++) d[i] = amp * Math.sin((2 * Math.PI * 1000 * i) / rate);
  }
  return b as unknown as AudioBuffer;
};

let fails = 0;
const near = (label: string, got: number | null, want: number, tol = 0.15) => {
  const ok = got !== null && Math.abs(got - want) <= tol;
  if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}: got ${got === null ? "null" : got.toFixed(3)}, want ${want} ±${tol}`);
};

// EBU Tech 3341 case 1: stereo 1 kHz sine at -23 dBFS -> -23.0 LUFS.
near("EBU 3341 #1 stereo -23 dBFS sine", integratedLoudness(sine(2, -23)), -23.0);
// Same signal 10 dB down must read 10 LU lower.
near("linearity: -33 dBFS sine", integratedLoudness(sine(2, -33)), -33.0);
// Mono at the same amplitude sits 3.01 LU below stereo.
near("mono is 3.01 LU below stereo", integratedLoudness(sine(1, -23)), -26.01);
// Non-48k rate: the filter is derived per rate, so the reading must not move.
near("44.1 kHz gives the same answer", integratedLoudness(sine(2, -23, 44100)), -23.0);
// Shorter than one 400 ms block is unmeasurable and must say so, not guess.
console.log(integratedLoudness(sine(2, -23, 48000, 0.2)) === null ? "PASS  sub-400ms returns null" : (fails++, "FAIL  sub-400ms should be null"));

// Normalising a -30 LUFS take to -16 should land on -16.
const quiet = sine(2, -30);
const n = normaliseTo(quiet, -16, ctx);
near("normalise -30 -> -16", n.reached, -16.0);
near("measured loudness of source", n.measured, -30.0);
console.log(n.limited === false ? "PASS  no limiting needed" : (fails++, "FAIL  should not have limited"));

// A quiet take with occasional full-scale spikes: high crest factor, so the gain
// needed to reach the target would push the peaks past 0 dBFS. It must stop at -1.
const peaky = sine(2, -35) as any;
for (let c = 0; c < 2; c++) {
  const d = peaky.getChannelData(c);
  for (let i = 0; i < d.length; i += 48000) d[i] = 0.99;
}
const l = normaliseTo(peaky as AudioBuffer, -14, ctx);
const p = peakOf(l.buffer);
console.log(l.limited && p <= Math.pow(10, -1 / 20) + 1e-6
  ? `PASS  ceiling respected (peak ${(20 * Math.log10(p)).toFixed(2)} dBFS)`
  : (fails++, `FAIL  peak ${(20 * Math.log10(p)).toFixed(2)} dBFS`));

// Silence trim: 2s of silence, 1s of tone, 3s of silence.
const rate = 48000;
const b = new FakeBuffer(1, rate * 6, rate);
const d = b.getChannelData(0);
for (let i = 0; i < d.length; i++) d[i] = 1e-5 * (Math.random() - 0.5); // noise floor
for (let i = 2 * rate; i < 3 * rate; i++) d[i] = 0.5 * Math.sin((2 * Math.PI * 440 * i) / rate);
const t = trimSilence(b as unknown as AudioBuffer, ctx);
near("trim removes ~2s from the front (150ms padding kept)", t.removedStart, 1.85, 0.05);
near("trim removes ~3s from the back", t.removedEnd, 2.85, 0.05);

// Nothing but silence must be left alone rather than reduced to nothing.
const silent = new FakeBuffer(1, rate * 3, rate);
const st = trimSilence(silent as unknown as AudioBuffer, ctx);
console.log(st.removedStart === 0 && st.removedEnd === 0 ? "PASS  all-silent take untouched" : (fails++, "FAIL  all-silent take was cut"));

console.log(fails === 0 ? "\nAll checks passed." : `\n${fails} check(s) failed.`);
process.exit(fails === 0 ? 0 : 1);
