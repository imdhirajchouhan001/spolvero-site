// The voice recorder and the audio pages around it.
//
// Copy rules: every claim here has to be true of the built tool. The loudness and
// format numbers below are the citable part of these pages, so they need to be
// right rather than approximately right.

import type { Faq, Tip } from "@/data/tools";

export type ExportFormat = {
  id: "mp3" | "wav";
  label: string;
  /** What a person would actually use it for, not what the codec is. */
  destination: string;
  note: string;
};

export const exportFormats: ExportFormat[] = [
  { id: "mp3", label: "MP3", destination: "Sending, WhatsApp, email, uploads", note: "Plays everywhere. Small files. The safe default." },
  { id: "wav", label: "WAV", destination: "Editing in Premiere, Audition, Resolve", note: "Uncompressed, so nothing is thrown away before you edit. Large." },
];

/** The reference table these pages exist to own. Figures are the published
 *  targets each platform documents, checked September 2026. */
export const formatGuide = [
  { format: "MP3", use: "Voice notes, sending, uploads", size: "~1 MB per minute at 128 kbps", plays: "Everywhere, including old devices", keep: "Fine for speech" },
  { format: "WAV", use: "Editing, archiving a master", size: "~10 MB per minute", plays: "Every editor; too large to send", keep: "Lossless" },
  { format: "M4A / AAC", use: "Apple devices, video editing", size: "~1 MB per minute", plays: "Apple, Android, most browsers", keep: "Slightly better than MP3 at the same size" },
  { format: "OPUS", use: "What WhatsApp voice notes actually are", size: "~0.5 MB per minute", plays: "Modern browsers; awkward elsewhere", keep: "Excellent for speech, poor support" },
  { format: "M4R", use: "iPhone ringtones only", size: "30 seconds maximum", plays: "iPhone", keep: "AAC in a renamed container" },
];

/** Loudness targets, which is the other thing people search for and get wrong. */
export const loudnessTargets = [
  { platform: "Most podcast hosts", target: "−16 LUFS", note: "Mono or stereo; the widely used spoken-word target" },
  { platform: "Spotify", target: "−14 LUFS", note: "Louder masters are turned down to match" },
  { platform: "YouTube", target: "−14 LUFS", note: "Normalises on playback, so pushing louder gains nothing" },
  { platform: "Apple Podcasts", target: "−16 LUFS", note: "Sound Check applies a similar adjustment" },
];

export const recorderHowTo = [
  { name: "Press record", text: "Allow the microphone when the browser asks. The level meter starts moving as soon as it hears you." },
  { name: "Stop and trim", text: "Drag the handles on the waveform to cut the dead air off either end, and play the selection back to check it." },
  { name: "Download", text: "Choose MP3 to send it or WAV to edit it. The file is made on your device and saved straight to your downloads." },
];

export const recorderShortcuts = [
  { keys: "Space", action: "Record, or stop" },
  { keys: "P", action: "Pause and resume" },
  { keys: "Enter", action: "Play the trimmed selection" },
  { keys: "R", action: "Start over" },
];

export const voiceRecorder = {
  slug: "voice-recorder",
  name: "Voice Recorder",
  kind: "Record and export",
  icon: "message",
  accent: "#7c3aed",
  tint: "#ede9fe",
  tagline: "Record, trim, download. Nothing uploaded.",
  summary:
    "Record from your microphone, cut the dead air off the ends, and download an MP3 or WAV. The audio is captured, edited and encoded on your own device — there is no server to send it to.",
  h1: "Online voice recorder: record, trim, download MP3",
  title: "Online Voice Recorder — Record and Download MP3, No Upload",
  description:
    "Record your voice in the browser, trim it, and download an MP3 or WAV. Nothing is uploaded — the audio is captured and encoded on your own device. No sign-up.",
  intro:
    "Press record, say what you need to say, then trim the ends and download it. Your audio never leaves this tab.",
  answer:
    "To record your voice online, press Record and allow the microphone when the browser asks. When you stop, drag the handles on the waveform to trim the silence off each end, then download it as MP3 to send or WAV to edit. Everything happens inside your browser — the recording is never uploaded, and closing the tab discards it.",
  tips: [
    {
      title: "Get the level right before the take",
      body: "Watch the meter while you speak normally. Aim for the bar sitting in the middle most of the time. If it hits the top and turns amber you are clipping, which cannot be repaired afterwards — move back from the mic rather than turning it down in editing.",
    },
    {
      title: "Record a few seconds of room first",
      body: "Start recording, stay silent for three seconds, then begin. That gives you a clean handle to trim to, and it tells you how much background noise you are actually working with.",
    },
    {
      title: "Wired beats wireless for recording",
      body: "Bluetooth headsets switch to a low-quality call profile when the microphone is in use, which is why they sound thin. Wired earbuds with an inline mic usually beat both a Bluetooth headset and a laptop's built-in microphone.",
    },
    {
      title: "MP3 to send, WAV to edit",
      body: "MP3 is small and plays everywhere, which is what you want for a voice note or an upload. WAV throws nothing away, so use it if the recording is going into an editor afterwards — you can always make an MP3 from a WAV, but not the reverse.",
    },
  ] satisfies Tip[],
  faqs: [
    {
      q: "Is my recording uploaded anywhere?",
      a: "No. The microphone stream is captured by your browser, drawn as a waveform, trimmed and encoded entirely on your device. There is no upload code and no server that could receive audio. Close the tab and the recording is gone.",
    },
    {
      q: "Is there a time limit?",
      a: "The practical limit is your device's memory, because the audio is held in the tab rather than streamed to a server. Recordings of several minutes are comfortable on any modern phone or laptop; very long sessions are better handled by a dedicated app.",
    },
    {
      q: "Why does the MP3 take a moment to appear?",
      a: "Because it is being encoded on your machine rather than on a server. The encoder is only downloaded when you first ask for an MP3, which keeps the page fast for everyone who does not. WAV export is instant, since it needs no encoding.",
    },
    {
      q: "Can I record a phone call or a meeting?",
      a: "This records your microphone, so it captures your side of a call and whatever the microphone picks up from the room. It cannot capture audio from inside another app. Recording other people has legal requirements that vary by country and state — check what applies where you are, and ask first.",
    },
    {
      q: "The recording is silent. What happened?",
      a: "Usually the wrong input. Use the microphone picker to choose the device by name rather than leaving it on Default, and watch the meter move while you speak. If the meter is flat, the browser is listening to a device that is not hearing you.",
    },
    {
      q: "Does it work on an iPhone?",
      a: "Yes, in Safari and Chrome on iOS. Recording needs a tap to begin, which is a browser rule rather than our choice, and the page has to stay in the foreground while recording.",
    },
    {
      q: "Can I use this offline?",
      a: "Recording, trimming and WAV export work once the page has loaded. MP3 export needs the encoder, which downloads the first time you use it — after that it is cached.",
    },
    {
      q: "What bitrate is the MP3?",
      a: "128 kbps, which is roughly a megabyte a minute and more than enough for speech. It is the setting most voice notes and podcast uploads use.",
    },
  ] satisfies Faq[],
};
