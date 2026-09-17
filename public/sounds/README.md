# Timer sounds

Drop audio files here and the timer will use them instead of its built-in
fallback. Nothing else needs changing — the player looks for these names:

| File | Used for |
| --- | --- |
| `chime.mp3` | The "Soft chime" option — one warm strike, roughly 1–2 seconds |
| `bell.mp3`  | The "Loud bell" option — an insistent alarm, 2–4 seconds |
| `pip.mp3`   | The short tick during the final ten seconds, under 200ms |

`.mp3` is checked first, then `.wav`. Keep each file small — these load on the
page, and the timer is meant to work offline once open.

## Licensing

Only add files you have the right to use **commercially**, since the pages
around the timer carry ads. Safe sources:

- **Freesound.org**, filtered to the CC0 licence. Record the sound's URL and
  author in this file when you add one.
- **Pixabay** audio, whose licence permits commercial use.
- **Mixkit** free sound effects, which allow commercial use without attribution.

Avoid anything marked CC-BY-NC, and avoid ripping system sounds from macOS,
Windows, iOS or Android — those are licensed to the OS, not to you.

## What plays if this folder stays empty

A synthesised fallback, built from layered sine partials with a bell-like decay
rather than a single flat tone. It is deliberately audible, but a real recording
will always sound better.

## Credits

_Add a line per file as you add them, e.g.:_

- `chime.mp3` — "Soft Bell" by SomeAuthor, CC0, freesound.org/s/123456/
