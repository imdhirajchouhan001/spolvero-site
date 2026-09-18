# Spolvero — working plan

Agreed 18 September 2026. This is the document to re-read before deciding what to
build next, so the same questions don't get re-argued each time.

---

## Where things actually stand

Facts, not estimates. Check them again rather than trusting this list once it ages.

| | |
| --- | --- |
| Domain created | **24 August 2026** — it was 24 days old when this plan was written |
| Pages live | 48 built |
| Backlinks | **Zero** |
| AdSense | Site status "Getting ready" — **not approved, so revenue is £0** |
| Ad units | 5 created and wired; they return `unfilled` until approval |
| Capacity | ~20 hrs/week |

Tools live: webcam test (+8 long-tail variants), mic, speaker, keyboard, dead
pixel · classroom, speech, exam clock, interval, Tabata, debate timers · voice
recorder. 13 guides, each linked from the tools it is about and back again.
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

**No fabricated testimonials.** `testimonials` in `src/data/home.ts` is an empty
array on purpose; the section renders nothing until real quotes exist. Invented
endorsements mislead readers and are what an ad network's site review looks for.

**No ads in fullscreen.** Timers and the pixel test run ad-free in fullscreen, and
both interrupting formats stand down while a timer runs. This is a promise made on
the pages themselves, and competitors with ad-funded fullscreen cannot copy it.

**Two levels of navigation, never three.** The menu shows a category and a few
tools; the rest live on that category's hub, which is also the page worth ranking.
Long-tail variants never appear in the menu. Listing every tool worked at eleven
and would be unusable at fifty.

**Every tool carries its guides, and every guide carries its tool.** Articles
declare `tools:` in their front matter, and `RelatedGuides.astro` renders the
reverse link on tool pages. One-directional linking wasted the articles as a route
into the tools and left each tool page a dead end.

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
- [ ] Submit the sitemap in Search Console (40 URLs, none crawled yet)
- [ ] Start the weekly two hours: Toastmasters clubs, debate leagues, r/Teachers
- [ ] List on AlternativeTo and Product Hunt
- [ ] Decide whether anyone else can do the community posting
- [ ] Write the GST and water-tracker guides — both need facts confirmed first
- [ ] Recorder follow-ups: live transcript, silence removal, loudness normalise,
      and the format pages (WhatsApp to MP3, iPhone ringtone, remove silence)
