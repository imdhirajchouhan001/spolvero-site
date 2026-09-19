# Spolvero — working plan

Agreed 18 September 2026. This is the document to re-read before deciding what to
build next, so the same questions don't get re-argued each time.

---

## Where things actually stand

Facts, not estimates. Check them again rather than trusting this list once it ages.

| | |
| --- | --- |
| Domain created | **24 August 2026** — it was 24 days old when this plan was written |
| Pages live | 87 built |
| Backlinks | **Zero** |
| AdSense | Site status "Getting ready" — **not approved, so revenue is £0** |
| Ad units | 5 created and wired; they return `unfilled` until approval |
| Capacity | ~20 hrs/week |

Tools live: webcam test (+8 long-tail variants), mic (+6), speaker (+4),
keyboard (+4), dead pixel (+4) · classroom (+4), speech (+4), exam clock (+2),
interval (+4), Tabata (+1), debate (+3) timers · voice recorder. 16 guides,
each linked from the tool or app it is about and back again.
Apps: Unspend live on Play; Exact, Enough, GST Calculator and Flash in progress.

---

## The plan

### Now → end of November — build

40 more tools, at ~4–5 hours each on shared engines. At 20 hrs/week this fits in
roughly 200 hours. Apps will slip; that is accepted.

**Build inside the two existing clusters, not outside them.** Authority compounds
within a cluster: page 30 of a timer cluster ranks faster than page 3 did, while
an unrelated tool starts from zero. Same 40 tools, very different outcome.

- **Timers** — pomodoro, stopwatch, chess clock, meeting, boxing rounds,
  meditation, sleep, egg, countdown-to-date, lap, presentation, bleep test
- **Device and browser tests** — touchscreen, gamepad, gyroscope, GPS, battery,
  internet speed, screen resolution, colour blindness, refresh rate, browser info

### Now → ongoing — two hours a week on distribution

Not a campaign. One post, one genuine reply, one directory listing per week.
Starting now rather than in January matters because link effects lag by months,
and the delay is added to the end rather than made up later.

| If links start | Results land |
| --- | --- |
| September | ~March–June 2027 |
| January | ~June–Sept 2027 |

### December — content and technical at volume

Claude writes the pages, guides, schema, internal linking, outreach drafts,
directory listings and Search Console analysis.

### 2027 — games

Deliberately deferred. Different audience, different distribution, different
monetisation. Adding a fourth business line while three are unproven is how all
four stay unproven.

---

## Who does what

The split that was agreed, and the reason for it.

| Claude — most of the hours | Dhiraj — ~2–5 hrs/week |
| --- | --- |
| Tool pages, guides, all copy | Post in 2–3 communities |
| Technical SEO, schema, internal links | Reply where the tool is genuinely the answer |
| Outreach written and ready to send | Send it from real accounts |
| Directory listings drafted | Submit, and handle replies |
| Search Console analysis | Provide access to the data |

### Why the posting cannot be automated

This was asked directly and the answer is no, for three concrete reasons rather
than as a limitation to work around:

1. **Google's spam policies name link schemes explicitly.** Automated link
   building against a new domain with no trust risks a manual action, which takes
   longer to recover from than earning the links honestly would have taken.
2. **Communities detect it immediately.** r/Teachers removes promotional posts
   from accounts with no history; club officers ignore cold templates. The reason
   a link from those places is worth anything is precisely that it is hard to fake.
3. **Posting as someone else** in places whose rules forbid it is impersonation.

Distribution can be drafted, researched and prepared in full. It has to be sent by
a person. If someone else can be found to do the sending, the plan works as
originally written and every word can be prepared for them.

---

## Decisions already made — do not relitigate without new information

**One domain, deep clusters.** Splitting into a domain per cluster would mean five
link profiles built from zero, five AdSense approvals and five deploys. Dividing
zero links does not help. Revisit at ~50K monthly visits, not before.

**The `.design` TLD is not a problem.** New gTLDs rank the same as `.com`. Domain
*age* is the constraint, and it resolves only with time.

**Topical dilution was overstated in early discussion.** Multi-tool sites rank
fine across varied clusters — calculator.net and 10015.io both do. The dominant
factors are age, links and per-page quality, in that order.

**Two faces: Bricolage Grotesque for headings, Helvetica for everything else.**
Buttons, badges and the menu moved to Helvetica too on 19 September 2026; Inter
is now only the Windows fallback in both stacks. The notes below predate that. Set 19 September 2026.
Headings are Bricolage Grotesque, loaded as a variable face. Body copy is
Helvetica, which ships with the operating system and costs no download; Windows
has none, so the stack falls to Inter and then Arial there. Inter stays as the UI
face for anything that is a control rather than prose — buttons, inputs, labels,
table headers, the menu, and the Badge and Button components, which carry
`font-ui` themselves. BioRhyme was tried for body the same day and dropped.

Scope the UI face to elements that are genuinely controls, never to size
classes. The first attempt used `[class*="text-sm"]`, which matched every small
paragraph and silently put the body back on the UI face.

A body face change moves line lengths, and that can push tables over the edge.
Helvetica is wider than what it replaced, and the markdown table on the MP3 guide
started scrolling at 375px with no keyboard access — a Level A failure that did
not exist before the font change. `ScrollableTables.astro` now gives any prose
table that actually overflows a tab stop and a label, re-checked on resize and
once fonts load. Re-run axe on an article at 375px after any type change.

**A tile's glyph takes its own accent, darkened until it reads.** Added 19
September 2026. Each tool carries a pale `tint` and a saturated `accent`, but the
glyph was drawn in one flat navy on every tile, so peach, mint and yellow cards
all held the same blue-black icon and the colour did nothing.

The accent cannot be used raw. Measured against its own tint, nine of fourteen
pairs fall below the 3:1 that 1.4.11 asks of a meaningful graphic — `#ffc83d` on
`#fff4d9` is 1.41, a yellow icon on a yellow card. `inkOn` in `src/lib/ink.ts`
walks the accent down in lightness with hue and saturation held until it clears
3.5, so orange stays orange and pink stays pink. Yellow lands on a deep amber,
because a yellow dark enough to read is not yellow, and that is a property of
yellow rather than a compromise. Add a tool with a tint and an accent and its
glyph colour follows on its own.

**Icons are Icons8 Material Sharp, drawn as CSS masks.** Replaced the Untitled UI
stroke set on 19 September 2026 — it was thin and characterless, which is what
Dhiraj meant by the icons being too simple. Gradient sets were tried first and
rejected: against the per-tool tints they came out muddy, and at the 16px of an
eyebrow pill a gradient is mud regardless.

The mask is the part worth remembering. Icons8 serves SVG only on a paid plan and
the free tier is PNG, but this site colours icons from CSS in dozens of places —
white on a navy button, white at 60% on the dark test stages, navy on a tint,
green on a tick, several changing on hover. An `<img>` would have frozen every one
of those. Each icon is instead a black glyph on transparency used as a mask over
`background-color: currentColor`, so the alpha channel gives the shape and CSS
gives the colour, exactly as an inline SVG behaves. No call site changed, and
`text-*` classes and hover states all still work. If a paid plan is ever bought,
swapping to real SVG is a change to `src/lib/icons.ts` alone.

Attribution is one link in the footer, which Icons8's own licence names as the
right form for a site using icons on most pages. No per-icon credit anywhere.

**Corners are square, 2px, everywhere.** Changed 19 September 2026 on Dhiraj's
call, reversing the large radii and pill buttons the Concentro reference brought
in. The whole radius ladder in `global.css` and `theme.css` collapses to a single
2px, so cards, inputs and chips cannot disagree about how square they are.
`--radius-full` is untouched on purpose: ticks, status dots, avatars and the timer
ring are circles rather than rounded rectangles, and squaring those would be a
different decision. Two things keep their own rounding — the Google Play badge,
whose corner radius is part of Google's badge spec, and the app icon tiles, which
are product artwork. To reverse it, restore the ladder in `global.css` and swap
the pill components back to `rounded-full`; the note in that file lists the old
values.

**The visual language is the Concentro reference, not headspace.** Changed 18
September 2026 after Dhiraj shared two design boards. Soft periwinkle wash bands
(`--color-wash`, `--color-wash-soft`) separating sections by tone rather than by
rules, white cards, navy CTAs, outlined pill eyebrows above centred headings, and
two-tone headlines where emphasis is carried by colour rather than weight. The
neutral scale moved from warm to cool to match. This replaced the earlier warm
cream direction — if the code and this document ever disagree again, the code was
changed deliberately and the document is the thing that is stale.

`--color-neutral-500` is pinned at `#5f667b`. Anything lighter drops small labels
below AA on the wash band (`#6b7288` measured 3.93). Re-check contrast against
white, `--color-wash-soft` and `--color-wash` before changing any neutral.

**Screenshots are whole device captures; the mockup draws only the shell.**
Fixed 18 September 2026. `iphone-mockup.tsx` used to draw its own status bar —
clock, wifi, signal, battery — and its own home indicator, then inset the
screenshot below all of that. Every screenshot on this site is a full capture
that already has those, so each phone showed the time twice and the app's own
colour stopped short of the top behind a band of flat white. The image now fills
the whole screen area and the mockup's status bar and home bar are gone.

It also hardcoded `width="750" height="1624"` on the image and a matching
`scale(0.00133333 0.000615764)`, so anything that was not exactly 750×1624 got
letterboxed inside its own frame. It uses `preserveAspectRatio="none"` now:
these captures come from several devices and differ by up to five percent, and at
the size a mockup is viewed a five percent stretch is invisible where a cropped
tab bar is not. Export at whatever size the device gives; it will fit.

**Every long page alternates surfaces; the cycle lives in `src/lib/bands.ts`.**
Added 18 September 2026, extended the same day to the tool, timer and recorder
pages, which were the worst of it — ten sections deep without changing colour
once. The page was a run of white and near-white — five identical sections in a
row at one point — which reads as a single column and gets skimmed. Sections now
cycle white / `--color-wash-soft` / white / `--color-wash`. Three surfaces, no
more: past that the alternation stops reading as structure. Half the sections are
conditional, so the cycle is assigned in `sectionOrder` in the frontmatter rather
than hardcoded per section — otherwise an app with no pricing puts two washes
side by side and loses the effect on exactly the shortest page. Cards flip to
white on a coloured band, since `bg-secondary` disappears against a wash. An ad
slot takes the band of the section it sits under so it reads as part of that
block rather than as a stripe of its own.

**Section headers are one component.** `SectionHeader.astro` renders the eyebrow
pill and the two-tone headline for all 29 call sites; wrap words in `*asterisks*`
in a title to render them in the quiet colour. Restyle there, not per page.

**No fabricated testimonials.** `testimonials` in `src/data/home.ts` is an empty
array on purpose; the section renders nothing until real quotes exist. Invented
endorsements mislead readers and are what an ad network's site review looks for.

**No ads in fullscreen.** Timers and the pixel test run ad-free in fullscreen, and
both interrupting formats stand down while a timer runs. This is a promise made on
the pages themselves, and competitors with ad-funded fullscreen cannot copy it.

**Every cluster has a page; nothing lives at a homepage anchor.** Changed 18
September 2026. Apps were at `/#apps`, the studio at `/#studio`, games at `/#next`
and the company FAQ at `/#about-faq`, which is why the homepage ran to fifteen
sections and why the menu felt arbitrary — it was pointing at fragments of one
page. There are now real pages at `/apps/`, `/studio/` and `/about/`, and the
homepage is back to six sections whose only job is to route. Tools moved above
apps there, because tools are what brings anyone to the site and they had been
sitting sixth, below a privacy table about the apps.

**Tool URLs carry their category, and `toolHref` is the only place one is built.**
Device tests were at `/tools/<slug>/` while timers were at `/tools/timers/<slug>/`,
and the menu's "Audio" category pointed at a single tool pretending to be a hub.
Device tests are now under `/tools/device-tests/`, the recorder under
`/tools/audio/`, and `/tools/` is a short directory of the three. Done at 25 days
old with zero backlinks, which is the cheapest this was ever going to be; GitHub
Pages serves no 301s, so `astro.config.mjs` emits a meta-refresh page with a
canonical at each of the 32 old paths. Never hand-write a tool path again — add
the tool to `src/data/tools.ts` with a `category` and let `toolHref` place it.

**Two levels of navigation, never three.** The menu shows a category and a few
tools; the rest live on that category's hub, which is also the page worth ranking.
Long-tail variants never appear in the menu. Listing every tool worked at eleven
and would be unusable at fifty.

**Every tool carries its guides, and every guide carries its tool.** Articles
declare `tools:` in their front matter, and `RelatedGuides.astro` renders the
reverse link on tool pages. One-directional linking wasted the articles as a route
into the tools and left each tool page a dead end. App pages follow the same rule:
`[slug]/index.astro` ranks declared articles above `readingTags` matches, because a
tag match put an unrelated photo guide above Unspend's own.

**WCAG 2.2 Level AA is the bar, and it is checked per breakpoint.** Conformance is
per-page and all-or-nothing, so a single failure anywhere means the page does not
conform. Three things were found and fixed on 18 September 2026:
`--color-fg-success-primary` and `--color-fg-warning-primary` were the 600 steps of
their scales, measuring 2.95 and 2.73 on their own 100-step backgrounds where 1.4.3
asks for 4.5 and 1.4.11 asks for 3.0 on the tick icons drawn in them; the
`overflow-x-auto` table wrappers held no focusable child and so could not be scrolled
by keyboard at all, which fails 2.1.1 at Level A; and the contact form's file input
had a `<label>` with no `for`, so it had no accessible name (4.1.2). Footer links were
19.5px tall and failed 2.5.8 at tablet widths only — which is why breakpoints get
tested separately rather than once at desktop. The phone mockups on the home and app
pages carry unreadable text on purpose and are exempt under 1.4.3's picture exception;
they also sit inside `aria-hidden="true"`. Re-check with axe after any token change,
and force `[data-reveal]` visible first or the scan silently skips everything below
the fold.

**No live transcript until it can run locally.** The recorder's headline claim is
"0 bytes of audio uploaded", and it is printed on the tool itself. The browser
`SpeechRecognition` API in Chrome streams the microphone to Google's servers, so
shipping it would make that claim false on the very page that makes it. The
feature is not cancelled — it needs a local model (whisper.cpp compiled to WASM,
a 30–75 MB download on first use), which is its own project rather than an
afternoon. Do not implement it with the browser API to save time.

**No audio of unverified provenance.** `public/sounds/` ships empty with a README
naming licences safe for commercial use. The timer falls back to synthesis.

---

## The honest risks

**Building is not the bottleneck and has not been for a while.** 40 more pages
with zero backlinks produces 80 pages with zero backlinks. The site is not short
of content; it is short of anyone knowing it exists.

**Building blind.** Until traffic arrives, there is no data on which tools matter.
Search Console should steer what gets built from roughly December onward.

**Maintenance compounds.** These are browser-API tools and browsers change. Three
real bugs were found and fixed in a single session. At ~50 tools this is a
standing cost — which is why the timer engine serves six pages and the device-test
engine serves five. Keep building that way.

**AdSense approval gates everything.** Until it clears, every visitor earns
nothing. It needs no further building and should be resolved within a fortnight.

---

## Realistic expectations

Nothing ranks for 3–6 months. That is the domain being new, not a fault in the
build.

Using the numbers from the original research: webcam test ~$279/month and timers
~$520/month at full ranking around month 14–15. If half of 40 clustered tools
reach even a third of that, the range is $2–4K/month by month 18–24.

A one-year horizon before meaningful revenue is the correct expectation.

---

## Next actions

- [ ] Get AdSense approved — needs nothing from the build
- [ ] Resubmit the sitemap: it is 90 URLs after the restructure, and 32 old tool
      paths now answer with a meta-refresh and a canonical. Watch Search Console
      for those being folded into the new URLs rather than reported as errors.
- [ ] Search Console: sitemap submitted 18 Sept, now 85 URLs. "Couldn't fetch"
      on the day of submission is Google not having tried yet, not a fault —
      the file returns 200 with `application/xml`, no BOM, and valid XML to
      Googlebot. Request Indexing on the three or four pages that matter most.
- [ ] Start the weekly two hours: Toastmasters clubs, debate leagues, r/Teachers
- [ ] List on AlternativeTo and Product Hunt
- [ ] Decide whether anyone else can do the community posting
- [ ] Build a generic countdown timer, then hang the duration pages off it —
      `5 minute timer`, `10 minute timer`, `1 hour timer` and the rest are the
      highest-volume timer queries there are, and none of the six existing
      timers is the right parent for them
- [ ] **Assets needed from Dhiraj** — nothing can generate these:
      · ~~Flash icon and screenshots~~ — supplied 18 September 2026: icon plus
        four screens (torch, screen mode, fill screen, settings). They arrived at
        1x from Figma, 393×852, and are used at that size rather than upscaled to
        match Unspend's 750px exports, because enlarging a 1x export adds file
        size and no detail. A 2x or 3x re-export would sharpen them on retina.
      · ~~GST, Enough and Unspend screens~~ — supplied 18 September 2026. Unspend
        went from five older screens to three current ones, Enough's five were
        replaced and its stale sixth removed, GST got its first three and a new
        icon. Every app now has real screenshots; no card falls back to the drawn
        keypad mock any more.
      · The GST invoice-preview screen carried a real mobile number and street
        address. Both are painted out in the panel's own #262626 and replaced
        with "+91 00000 00000" and "Your address here". If that screen is ever
        re-exported, redact it again before it ships — the screenshot is the only
        place on the site those details ever appeared.
      · `public/products/baseline/icon.webp` and `public/products/astro/icon.webp`
        (both fall back to the monogram tile)
- [ ] Write the GST and water-tracker guides — both need facts confirmed first
- [x] Recorder: silence removal and loudness normalise — done 18 September 2026.
      `src/lib/audio-cleanup.ts` measures ITU-R BS.1770-4 integrated loudness
      (K-weighting derived per sample rate, 400 ms blocks at 75% overlap, both
      gates) and applies one gain to hit −16 or −14 LUFS, stopping at −1 dBFS
      rather than compressing. `npm test` checks it against EBU Tech 3341 test 1.
- [ ] Recorder format pages, now that two of them have a feature behind them:
      `remove-silence` and `whatsapp-to-mp3` can both be written honestly. The
      iPhone ringtone page cannot — an M4R is AAC, and the tool ships an MP3 and
      WAV encoder only. Either add an AAC path or write it as a guide that sends
      people to WAV plus iTunes; do not publish a page the tool cannot deliver.
- [ ] Live transcript — see the decision above; needs a local model, not the
      browser API
