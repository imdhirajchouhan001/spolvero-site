---
title: "MP3, WAV, M4A or OPUS: which audio format to pick, and when"
seoTitle: "MP3 vs WAV vs M4A: Which Format Should You Use"
description: "A plain comparison of the formats you actually meet — what each is for, how big it gets, where it plays, and the one rule that avoids most mistakes."
published: "2026-09-18"
updated: "2026-09-18"
answer: "Use MP3 to send or upload, because it plays everywhere and is about a megabyte a minute. Use WAV if the audio is going into an editor, because it throws nothing away. M4A is slightly better than MP3 at the same size but less universal, and OPUS — what WhatsApp voice notes actually are — is the best of all for speech and the worst supported."
tool: "/tools/audio/voice-recorder/"
tools: ["/tools/audio/voice-recorder/"]
toolCta: "Record and export"
tags: ["Audio", "Formats"]
minutes: 6
---

Most format decisions come down to one question: **is this file finished, or is something going to be done to it?** Finished files should be small and universal. Working files should keep everything.

Everything below follows from that.

## The formats, compared

| Format | Use it for | Size | Plays on | Quality |
| --- | --- | --- | --- | --- |
| **MP3** | Sending, uploading, voice notes | ~1 MB/min at 128 kbps | Everything, including old devices | Fine for speech; good enough for most music |
| **WAV** | Editing, archiving a master | ~10 MB/min | Every editor; too big to send | Lossless — nothing discarded |
| **M4A / AAC** | Apple devices, video editing | ~1 MB/min | Apple, Android, most browsers | Slightly better than MP3 at the same size |
| **OPUS** | What WhatsApp voice notes are | ~0.5 MB/min | Modern browsers; awkward elsewhere | Excellent for speech, poor support |
| **FLAC** | Archiving music losslessly | ~5 MB/min | Players and editors, not every phone | Lossless, about half the size of WAV |
| **M4R** | iPhone ringtones only | 30 seconds max | iPhone | AAC in a renamed container |

## Lossy and lossless, briefly

**Lossless** — WAV, FLAC — keeps every sample. Decode it and you get back exactly what went in.

**Lossy** — MP3, AAC, OPUS — permanently discards detail chosen to be hard to hear, and gets much smaller in exchange. At sensible bitrates most people cannot tell on speech.

The consequence that matters: **lossy loss compounds.** Every time you decode and re-encode, you throw away more. Editing an MP3 and exporting as MP3 means two rounds of loss. This is why you edit from WAV and export to MP3 once, at the end — never the reverse.

## Choosing, in practice

**Sending it to someone.** MP3. Universal, small, nobody has ever had to look up how to open one.

**Uploading somewhere.** MP3 unless the platform asks otherwise. Some podcast hosts prefer WAV and compress it themselves — if they do, give them WAV, since their encoder is better than a second round of MP3.

**Editing it.** WAV. Always start from the least-compressed source you have.

**Storing a master.** WAV if space is free, FLAC if it is not. FLAC is lossless at roughly half the size.

**A phone voice note.** Whatever the app produces; you usually have no choice. Converting to MP3 makes it easier to open elsewhere.

**An iPhone ringtone.** M4R, 30 seconds or less. It is AAC with a different extension, and both constraints are real.

## Bitrate, and the point of diminishing returns

For lossy formats, bitrate sets the size and the quality.

For **speech**: 64 kbps is fine, 128 kbps is generous. Higher is wasted — spoken word simply does not carry enough information to need it.

For **music**: 128 kbps is acceptable, 192–256 kbps is where most people stop hearing a difference, 320 kbps is the practical ceiling.

Above those numbers you are making the file bigger without making it better. Our recorder exports MP3 at 128 kbps for exactly this reason — for a voice recording it is the point where more stops helping.

## The mistakes worth avoiding

**Editing a lossy file and re-exporting lossy.** The most common one. Keep the WAV.

**Recording in MP3 to save space.** Record lossless, compress at the end. Storage is cheap and the decision is irreversible the other way.

**Assuming a bigger file sounds better.** A 320 kbps MP3 made from a 128 kbps source is a large file with 128 kbps of quality in it. Upscaling recovers nothing.

**Renaming the extension.** Changing `.wav` to `.mp3` does not convert anything — it just mislabels the file, and most software will refuse it or play noise.

**Using WAV to send.** Ten minutes of WAV is about 100MB. It will bounce off most email limits and annoy the recipient.

## Where OPUS fits

Worth knowing because you already use it without realising.

WhatsApp voice notes are OPUS. So is most browser voice chat, and Discord. For speech at low bitrates it genuinely outperforms MP3 and AAC — it was designed for exactly that.

The problem is everything else. Many editors, older devices and plenty of upload forms still reject it. So it is excellent at its job and a poor choice for a file you need to hand to somebody.

If you have an OPUS file that needs to go somewhere else, convert it to MP3 once and use that.

## The one rule

If someone is going to *listen* to it, MP3. If someone is going to *work* on it, WAV.

Almost every format decision you will actually face resolves cleanly with that, and the [voice recorder](/tools/audio/voice-recorder/) offers exactly those two for the same reason — labelled by what you are going to do with the file rather than by the codec.
