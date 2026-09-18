// audiobuffer-to-wav (MIT) ships no type declarations.
declare module "audiobuffer-to-wav" {
  /** Encodes an AudioBuffer as a WAV file. */
  export default function audioBufferToWav(
    buffer: AudioBuffer,
    options?: { float32?: boolean },
  ): ArrayBuffer;
}
