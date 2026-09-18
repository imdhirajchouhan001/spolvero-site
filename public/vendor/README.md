# Vendored libraries

## lamejs.js — MP3 encoder

Source: [@breezystack/lamejs](https://www.npmjs.com/package/@breezystack/lamejs) v1.2.7,
a maintained fork of lamejs, itself a JavaScript port of the LAME MP3 encoder.

**Licence: LGPL-3.0.** Full text in `lamejs-LICENSE.txt`.

It is kept here as a separate, unmodified file rather than bundled into the
application, and it is fetched at runtime only when someone exports an MP3. That
matters for two reasons:

1. **LGPL compliance.** The licence requires that users be able to replace the
   library with their own version. Because this file is served standalone and is
   not minified into the app bundle, replacing it is a matter of swapping this
   file — no rebuild of anything else required.
2. **Page weight.** The encoder is around 300KB and most visitors never export an
   MP3. Loading it on demand keeps it off the critical path, which is the whole
   reason these tool pages load quickly.

Everything else in the recorder — capture, waveform, trimming, WAV export — uses
permissively licensed libraries (`wavesurfer.js`, BSD-3-Clause;
`audiobuffer-to-wav`, MIT) or the browser's own APIs.

To update: `npm i @breezystack/lamejs && cp node_modules/@breezystack/lamejs/dist/lamejs.iife.js public/vendor/lamejs.js`
