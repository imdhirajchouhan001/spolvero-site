// Every timer page, hub card and preset is generated from this file.
//
// Copy rules: only timings a published source backs up. The Toastmasters and exam
// tables below are the reason these pages exist rather than being one timer with
// different headings, so they have to be right.

export type TimerStatus = "live" | "soon";

/** The three engine modes. Each page picks one. */
export type TimerMode = "countdown" | "speech" | "exam" | "interval";

export type Preset = {
  label: string;
  /** Total seconds. In interval mode this is derived and may be 0. */
  seconds: number;
  /** Speech mode only: seconds at which each light turns on. */
  lights?: { green: number; amber: number; red: number };
  /** Interval mode only: one round of work, then rest, repeated. */
  interval?: { work: number; rest: number; rounds: number; prepare?: number };
  note?: string;
};

export type Tip = { title: string; body: string };
export type Faq = { q: string; a: string };

export type Timer = {
  slug: string;
  name: string;
  kind: string;
  status: TimerStatus;
  mode: TimerMode;
  icon: string;
  accent: string;
  tint: string;
  tagline: string;
  summary: string;
  /** Page copy. Only present on the ones that are built. */
  page?: {
    h1: string;
    title: string;
    description: string;
    intro: string;
    /** Leads the page, readable without running anything. */
    answer: string;
    presets: Preset[];
    /** Seconds the timer starts on when the page loads. */
    defaultSeconds: number;
    tips: Tip[];
    faqs: Faq[];
  };
};

export const timers: Timer[] = [
  {
    slug: "classroom-timer",
    name: "Classroom Timer",
    kind: "Visual timer",
    status: "live",
    mode: "countdown",
    icon: "clock",
    accent: "#2e9bff",
    tint: "#e2f0ff",
    tagline: "Big, calm and ad-free on the board.",
    summary:
      "A visual countdown built to be projected: huge digits, a shrinking ring, and a calm chime. Fullscreen carries no ads at all, so nothing unexpected appears in front of a class.",
    page: {
      h1: "Classroom timer: big, calm, and ad-free on screen",
      title: "Free Classroom Timer — Big Visual Countdown for Schools",
      description:
        "A free visual classroom timer for smartboards. Huge digits, a shrinking ring, a calm chime, and no ads at all in fullscreen. Works offline.",
      intro:
        "Pick a time, press start, go fullscreen. Students can read it from the back of the room, and nothing else appears on screen.",
      answer:
        "To run a timer on a smartboard, choose a preset below, press Start, then press F for fullscreen. The countdown fills the screen, turns amber at 20% remaining and red at zero, and plays a soft chime. Fullscreen shows no ads and no navigation, so the class only sees the time.",
      defaultSeconds: 300,
      presets: [
        { label: "1 min", seconds: 60, note: "Tidy-up warning, quick recall" },
        { label: "3 min", seconds: 180, note: "Think-pair-share, starter task" },
        { label: "5 min", seconds: 300, note: "Do-now, exit ticket" },
        { label: "10 min", seconds: 600, note: "Group task, reading" },
        { label: "15 min", seconds: 900, note: "Independent work" },
        { label: "30 min", seconds: 1800, note: "Extended task, test section" },
      ],
      tips: [
        {
          title: "Press F for fullscreen before the lesson starts",
          body: "Fullscreen hides the browser, the navigation and every ad, so the board shows only the countdown. Escape exits. Doing it before students arrive avoids showing them a page of anything else.",
        },
        {
          title: "The screen will not sleep",
          body: "While a timer runs, the page asks the browser to keep the display awake, so a long silent-reading timer will not be interrupted by a screensaver or the projector dropping out.",
        },
        {
          title: "Keyboard, not mouse",
          body: "Space starts and pauses, F goes fullscreen, R resets and the up arrow adds a minute. If your board has a wireless keyboard or clicker, you can run the whole thing from anywhere in the room.",
        },
        {
          title: "Set the tone with the sound",
          body: "The default is a soft chime rather than an alarm, because a siren in a quiet classroom startles people. Switch to the loud bell for noisy rooms, or turn sound off entirely and rely on the colour change.",
        },
      ],
      faqs: [
        {
          q: "Will ads show on the projector?",
          a: "No. Fullscreen shows the timer and nothing else — no ads, no navigation, no branding beyond the timer itself. Ads appear only on this setup page, which is the part students never see.",
        },
        {
          q: "Does it keep accurate time if I switch tabs?",
          a: "Yes. The timer works from clock timestamps rather than counting frames, so switching to your slides or another tab does not make it drift. Browsers throttle background tabs heavily, which is what causes other timers to fall behind.",
        },
        {
          q: "Does it work without internet?",
          a: "Once the page has loaded, the timer runs entirely in your browser and needs no connection. If your classroom internet is unreliable, load the page before the lesson and it will keep working.",
        },
        {
          q: "Can I save the times I use every lesson?",
          a: "Yes. Save a time and it stays on that device, with no account and nothing sent anywhere. It is stored in your browser, so it is per-device and per-browser.",
        },
        {
          q: "How big are the digits?",
          a: "In fullscreen the digits scale to roughly a fifth of the screen height, which is legible from the back of a standard classroom on a normal smartboard. The ring around them gives students a sense of time passing without reading numbers.",
        },
        {
          q: "What happens when the time runs out?",
          a: "The screen turns red, flashes gently, and plays your chosen sound. The alarm stops on its own after a few seconds, or you can stop it with a tap or the space bar. There is also a one-tap add-a-minute if a class needs longer.",
        },
      ],
    },
  },
  {
    slug: "speech-timer",
    name: "Speech Timer",
    kind: "Timing lights",
    status: "live",
    mode: "speech",
    icon: "message",
    accent: "#23b26d",
    tint: "#dff5ea",
    tagline: "Green, amber, red — the way clubs do it.",
    summary:
      "Timing lights for Toastmasters meetings, presentations and contests. Pick the speech type and the green, amber and red points are set for you.",
    page: {
      h1: "Speech timer with green, amber and red lights",
      title: "Toastmasters Speech Timer — Green, Amber and Red Lights",
      description:
        "A free speech timer with Toastmasters timing lights. Pick the speech type and green, amber and red are set automatically. Fullscreen, ad-free on screen, no sign-up.",
      intro:
        "Pick the speech type, press start, and the screen turns green, amber then red at the right moments — the same signal a club timekeeper gives with cards.",
      answer:
        "Toastmasters timing lights show green at the minimum time, amber one minute before the maximum, and red at the maximum. A speaker who finishes more than 30 seconds outside the range is normally disqualified from a contest. Pick a speech type below and those points are set for you.",
      defaultSeconds: 420,
      presets: [
        { label: "Ice Breaker", seconds: 360, lights: { green: 240, amber: 300, red: 360 }, note: "4–6 minutes" },
        { label: "Standard speech", seconds: 420, lights: { green: 300, amber: 360, red: 420 }, note: "5–7 minutes" },
        { label: "Evaluation", seconds: 180, lights: { green: 120, amber: 150, red: 180 }, note: "2–3 minutes" },
        { label: "Table Topics", seconds: 120, lights: { green: 60, amber: 90, red: 120 }, note: "1–2 minutes" },
        { label: "Report", seconds: 180, lights: { green: 120, amber: 150, red: 180 }, note: "2–3 minutes" },
        { label: "Conference talk", seconds: 1200, lights: { green: 900, amber: 1080, red: 1200 }, note: "15–20 minutes" },
      ],
      tips: [
        {
          title: "Put the screen where the speaker can see it",
          body: "The point of timing lights is that the speaker self-corrects. A laptop turned towards the lectern, or a tablet on the front table, does the job — the audience does not need to see it.",
        },
        {
          title: "Colour is the signal, sound is optional",
          body: "Clubs signal with colour, not noise. Sound is off by default here for that reason. Turn it on only if the timer is out of the speaker's line of sight.",
        },
        {
          title: "The timer counts up, like a timekeeper's watch",
          body: "It shows time elapsed rather than time remaining, which matches how the role is actually performed and makes reporting the time afterwards straightforward.",
        },
        {
          title: "Overtime keeps running",
          body: "The clock does not stop at red. It keeps counting so you can report the exact time, which matters in contests where anything more than 30 seconds over the maximum is disqualifying.",
        },
      ],
      faqs: [
        {
          q: "What are the Toastmasters timing lights?",
          a: "Green shows when the speaker reaches the minimum time, amber one minute before the maximum, and red at the maximum. They tell the speaker to begin wrapping up without interrupting them.",
        },
        {
          q: "How long is each type of speech?",
          a: "The Ice Breaker is 4–6 minutes, most prepared speeches are 5–7, evaluations are 2–3, and Table Topics responses are 1–2. Reports from the grammarian, ah-counter and timer are usually 2–3 minutes.",
        },
        {
          q: "What is the 30-second rule?",
          a: "In contests, a speaker who finishes more than 30 seconds under the minimum or over the maximum is disqualified. In ordinary club meetings it is treated as guidance rather than a rule.",
        },
        {
          q: "Can I set my own times?",
          a: "Yes. Any preset can be adjusted, or you can set green, amber and red to whatever your format needs — useful for conference slots, lightning talks and school presentations.",
        },
        {
          q: "Does the timekeeper still need to report the time?",
          a: "Yes. The timer keeps counting past red and shows the final elapsed time, so you can read out each speaker's time during the timer's report.",
        },
        {
          q: "Will it work on a tablet?",
          a: "Yes. It runs in any modern browser, and fullscreen on a tablet propped on the front table is a common way clubs use it.",
        },
      ],
    },
  },
  {
    slug: "exam-clock",
    name: "Exam Clock",
    kind: "Invigilator clock",
    status: "live",
    mode: "exam",
    icon: "book",
    accent: "#ff7e1d",
    tint: "#ffeadb",
    tagline: "Start time, finish time, time remaining.",
    summary:
      "A projected exam clock showing start and finish times alongside the time remaining, with an optional reading period. Nothing on screen but the clock.",
    page: {
      h1: "Exam clock for invigilators and projectors",
      title: "Exam Clock — Projected Timer With Start and Finish Times",
      description:
        "A free exam clock for invigilators. Shows start time, finish time and time remaining, with an optional reading period. Ad-free in fullscreen.",
      intro:
        "Set the length, add a reading period if your paper has one, and project it. Candidates see the start time, the finish time and how long is left.",
      answer:
        "An exam clock should show three things at once: the time the paper started, the time it finishes, and how long remains. Set the duration below, add a reading period if the paper has one, and press F for fullscreen. Times are calculated from the moment you start, so what is written on the board always matches the clock.",
      defaultSeconds: 3600,
      presets: [
        { label: "45 min", seconds: 2700, note: "Short test, vocabulary paper" },
        { label: "1 hour", seconds: 3600, note: "Standard class assessment" },
        { label: "1 hr 30", seconds: 5400, note: "GCSE-length paper" },
        { label: "2 hours", seconds: 7200, note: "A-level, university paper" },
        { label: "2 hr 30", seconds: 9000, note: "Extended paper" },
        { label: "3 hours", seconds: 10800, note: "Long-form finals" },
      ],
      tips: [
        {
          title: "Reading time is counted separately",
          body: "Turn on a reading period and the clock counts that down first, labelled clearly, before the writing time begins. Candidates can see which phase they are in without asking.",
        },
        {
          title: "Start and finish times are written for you",
          body: "The clock works out the finish time from the moment you start, so the board always agrees with the clock. No arithmetic under pressure, and no stale times left from the previous session.",
        },
        {
          title: "Extra time is one tap",
          body: "If the paper starts late or a candidate is granted extra time, add minutes while the clock runs. The finish time on screen updates with it.",
        },
        {
          title: "Check it from the back before candidates arrive",
          body: "Project it and walk to the furthest desk. If the finish time is not readable from there, the room is too big for the projector setting, not for the clock — increase the projector's zoom or move to fullscreen.",
        },
      ],
      faqs: [
        {
          q: "What should an exam clock display?",
          a: "Start time, finish time and time remaining. Candidates plan against the finish time, while invigilators need the remaining time for announcements. Showing both removes most questions from the floor.",
        },
        {
          q: "Can it handle reading time?",
          a: "Yes. Set a reading period and it counts down first, clearly labelled, then moves into writing time automatically. This matches how papers with a reading period are normally run.",
        },
        {
          q: "What if the exam starts late?",
          a: "Start the clock when the paper actually begins rather than at the scheduled time. Everything on screen is derived from that moment, so the finish time will be right.",
        },
        {
          q: "Does it keep time if the laptop sleeps?",
          a: "The page asks the browser to keep the display awake while the clock runs. The time itself comes from the system clock, so even if the machine did sleep, the remaining time would be correct when it woke.",
        },
        {
          q: "Are there any ads on screen?",
          a: "Not in fullscreen. The projected view shows the clock alone. Ads appear only on this setup page before you start.",
        },
        {
          q: "Can I put the centre or room name on it?",
          a: "Yes. Add a label and it sits above the clock in fullscreen, which is useful when several rooms are running different papers.",
        },
      ],
    },
  },
  {
    slug: "interval-timer",
    name: "Interval Timer",
    kind: "HIIT and circuits",
    status: "live",
    mode: "interval",
    icon: "zap",
    accent: "#ff6fa3",
    tint: "#ffe6ef",
    tagline: "Work, rest, repeat — on the gym TV.",
    summary:
      "Rounds of work and rest with loud cues and a full-screen colour change, so you know which phase you are in without looking closely.",
    page: {
      h1: "Interval timer for HIIT, EMOM and circuits",
      title: "Interval Timer — Free HIIT, EMOM and Circuit Timer Online",
      description:
        "A free interval timer for HIIT, EMOM and circuit training. Set work, rest and rounds, then run it fullscreen with loud cues and a clear colour change.",
      intro:
        "Set your work, your rest and how many rounds. The screen turns one colour for work and another for rest, so you never have to squint at a number mid-set.",
      answer:
        "Set the work seconds, rest seconds and number of rounds below, then press Start. The screen is green while you work and amber while you rest, with a three-second lead-in so you are not caught mid-setup. A common starting point is 40 seconds of work to 20 of rest for eight rounds.",
      defaultSeconds: 0,
      presets: [
        { label: "40/20 × 8", seconds: 0, interval: { work: 40, rest: 20, rounds: 8, prepare: 10 }, note: "Classic HIIT, eight minutes total" },
        { label: "30/15 × 10", seconds: 0, interval: { work: 30, rest: 15, rounds: 10, prepare: 10 }, note: "Shorter efforts, more rounds" },
        { label: "45/15 × 12", seconds: 0, interval: { work: 45, rest: 15, rounds: 12, prepare: 10 }, note: "Longer work, short recovery" },
        { label: "60/30 × 8", seconds: 0, interval: { work: 60, rest: 30, rounds: 8, prepare: 10 }, note: "Circuit stations" },
        { label: "EMOM × 10", seconds: 0, interval: { work: 60, rest: 0, rounds: 10, prepare: 10 }, note: "Every minute on the minute" },
        { label: "90/60 × 6", seconds: 0, interval: { work: 90, rest: 60, rounds: 6, prepare: 15 }, note: "Strength intervals" },
      ],
      tips: [
        { title: "Use the lead-in", body: "Every preset starts with a short prepare phase so you can put the phone down and get into position. Without it the first round is always the worst one." },
        { title: "Rest is part of the work", body: "In interval training the rest ratio is what makes the effort repeatable. Cutting rest to finish sooner turns intervals into a slow continuous effort, which is a different session entirely." },
        { title: "Turn the sound up for the gym", body: "Switch to the loud bell if the room is noisy. The cue fires at each transition, so you can keep your eyes on what you are doing rather than on the screen." },
        { title: "EMOM means the clock does not wait", body: "In an EMOM the next round starts on the minute whether you have finished or not. Finishing early is the rest — that is the point of the format." },
      ],
      faqs: [
        { q: "What is a good work-to-rest ratio?", a: "For general conditioning, 2:1 work to rest is a common starting point — 40 seconds on, 20 off. For harder efforts closer to sprinting, 1:2 or 1:3 lets you actually repeat the intensity. The right ratio depends on how hard the work interval is meant to be." },
        { q: "What is EMOM?", a: "Every Minute On the Minute. You start a set of work at the top of each minute and rest for whatever is left. A preset for it is included, set as 60 seconds of work with no separate rest phase." },
        { q: "Does the timer keep running if my screen locks?", a: "The page asks the browser to keep the display awake while a timer runs, so it should not lock. On iOS this is less reliable than on desktop — plugging the phone in helps." },
        { q: "Can I use it on a TV?", a: "Yes. Open the page in the TV's browser or cast the tab, then go fullscreen. The colour change is designed to be read from across a room rather than close up." },
        { q: "Will ads appear during a workout?", a: "No. Fullscreen carries no ads at all, and the interrupting formats stand down entirely while a timer is running." },
        { q: "Can I save a session I use often?", a: "Yes. Saved settings stay on that device, with no account and nothing uploaded." },
      ],
    },
  },
  {
    slug: "tabata-timer",
    name: "Tabata Timer",
    kind: "20/10 intervals",
    status: "live",
    mode: "interval",
    icon: "target",
    accent: "#ffc83d",
    tint: "#fff4d9",
    tagline: "Eight rounds, twenty on, ten off.",
    summary:
      "The Tabata protocol ready to run: twenty seconds of work, ten of rest, eight rounds, with a lead-in and clear colour changes.",
    page: {
      h1: "Tabata timer: 20 seconds on, 10 seconds off",
      title: "Tabata Timer — Free 20/10 Interval Timer, 8 Rounds Online",
      description:
        "A free Tabata timer: 20 seconds of work, 10 seconds of rest, eight rounds, four minutes total. Loud cues, clear colours, fullscreen with no ads.",
      intro:
        "Twenty seconds of work, ten of rest, eight times through. Press start and put the phone down — the colour tells you which phase you are in.",
      answer:
        "A Tabata is eight rounds of 20 seconds of work and 10 seconds of rest, four minutes in total. The protocol comes from Izumi Tabata's 1996 study, where the work intervals were performed at close to maximum effort — which is what makes four minutes hard rather than short.",
      defaultSeconds: 0,
      presets: [
        { label: "Tabata", seconds: 0, interval: { work: 20, rest: 10, rounds: 8, prepare: 10 }, note: "The standard protocol, four minutes" },
        { label: "Double Tabata", seconds: 0, interval: { work: 20, rest: 10, rounds: 16, prepare: 10 }, note: "Eight minutes, two blocks' worth" },
        { label: "Tabata 30/15", seconds: 0, interval: { work: 30, rest: 15, rounds: 8, prepare: 10 }, note: "Longer work, same ratio" },
        { label: "Half Tabata", seconds: 0, interval: { work: 20, rest: 10, rounds: 4, prepare: 10 }, note: "Two minutes, for a finisher" },
        { label: "20/20 × 8", seconds: 0, interval: { work: 20, rest: 20, rounds: 8, prepare: 10 }, note: "Even ratio, easier to repeat" },
        { label: "Tabata × 4 blocks", seconds: 0, interval: { work: 20, rest: 10, rounds: 32, prepare: 15 }, note: "Sixteen minutes, change exercise each block" },
      ],
      tips: [
        { title: "It only works at real intensity", body: "The original protocol used efforts near maximum. At a comfortable pace it is just four minutes of moving — the format does nothing on its own." },
        { title: "Pick one movement per block", body: "Squats, burpees, rowing, bike. Switching exercises mid-block costs you the transitions, and ten seconds is not enough to change stations." },
        { title: "Warm up first, properly", body: "Four minutes of near-maximum effort from cold is how people hurt themselves. Five to ten minutes of easy work beforehand is not optional." },
        { title: "Eight rounds is the whole thing", body: "If you can comfortably do sixteen, the intensity was too low rather than the session too short. Go harder before you go longer." },
      ],
      faqs: [
        { q: "How long is a Tabata?", a: "Four minutes: eight rounds of 20 seconds of work and 10 seconds of rest. A short lead-in is added here so you can get into position, which is not counted in the four." },
        { q: "Where does the protocol come from?", a: "From research published by Izumi Tabata and colleagues in 1996, studying high-intensity intermittent training in speed skaters. The 20/10 × 8 structure comes from that work, performed at very high intensity." },
        { q: "What exercises work best?", a: "Anything you can do safely at high intensity and stop instantly: bodyweight squats, burpees, mountain climbers, a stationary bike or a rower. Avoid complex lifts where fatigue makes technique unsafe." },
        { q: "Can I do Tabata every day?", a: "It is demanding if you do it properly, so most people fit it two or three times a week alongside easier training. Daily near-maximum effort is a reliable route to being injured or exhausted." },
        { q: "Is it the same as HIIT?", a: "Tabata is one specific HIIT protocol, not a synonym. HIIT covers any alternation of hard work and recovery; Tabata is the particular 20/10 × 8 structure from that study." },
        { q: "Are there ads over the timer?", a: "No. Fullscreen shows the timer alone, and ads stand down entirely while it is running." },
      ],
    },
  },
  {
    slug: "debate-timer",
    name: "Debate Timer",
    kind: "Format presets",
    status: "live",
    mode: "speech",
    icon: "users",
    accent: "#4a4ac0",
    tint: "#eeeefb",
    tagline: "British Parliamentary, Worlds, LD.",
    summary:
      "Speech times and protected periods for the main debating formats, without setting them up by hand every round.",
    page: {
      h1: "Debate timer with format presets",
      title: "Debate Timer — British Parliamentary, Worlds and LD Presets",
      description:
        "A free debate timer with presets for British Parliamentary, World Schools, Lincoln-Douglas and Policy. Protected time signalled, fullscreen, no ads on screen.",
      intro:
        "Pick the format and the speech times are already right, including the protected minutes at each end when points of information cannot be offered.",
      answer:
        "In British Parliamentary, speeches are seven minutes, with the first and last minute protected — no points of information may be offered during them. World Schools uses eight-minute substantive speeches and four-minute replies. Pick a format below and those points are set for you.",
      defaultSeconds: 420,
      presets: [
        { label: "British Parl. 7 min", seconds: 420, lights: { green: 60, amber: 360, red: 420 }, note: "Protected first and last minute" },
        { label: "Worlds substantive", seconds: 480, lights: { green: 60, amber: 420, red: 480 }, note: "8 minutes, protected first and last" },
        { label: "Worlds reply", seconds: 240, lights: { green: 0, amber: 180, red: 240 }, note: "4 minutes, no points of information" },
        { label: "LD constructive", seconds: 360, lights: { green: 0, amber: 300, red: 360 }, note: "Affirmative constructive, 6 minutes" },
        { label: "Policy constructive", seconds: 480, lights: { green: 0, amber: 420, red: 480 }, note: "8 minutes" },
        { label: "Cross-examination", seconds: 180, lights: { green: 0, amber: 150, red: 180 }, note: "3 minutes" },
      ],
      tips: [
        { title: "Green marks the end of protected time", body: "In BP and Worlds the first minute is protected. Green here means points of information may now be offered, which is exactly when the room needs to know." },
        { title: "Amber is the one-minute warning", body: "Amber falls a minute before the end, which in BP and Worlds is also when protected time resumes and offers must stop." },
        { title: "Let it run past red", body: "The clock keeps counting so you can record the overrun. Most formats allow a short grace period, after which material is discounted rather than the speech being stopped." },
        { title: "Put it where the speaker can see it", body: "A laptop on the table facing the floor does the job. Timing signals only work if the person speaking can act on them." },
      ],
      faqs: [
        { q: "How long is a British Parliamentary speech?", a: "Seven minutes. The first and last minute are protected, meaning points of information may not be offered during them — so the window for offering runs from the one-minute mark to the six-minute mark." },
        { q: "What are the World Schools times?", a: "Substantive speeches are eight minutes and reply speeches are four. As in BP, the first and last minute of substantive speeches are protected; no points of information are offered during reply speeches at all." },
        { q: "What about Lincoln-Douglas?", a: "The standard structure is a six-minute affirmative constructive, three minutes of cross-examination, a seven-minute negative constructive, three more of cross-examination, then a four-minute first affirmative rebuttal, a six-minute negative rebuttal and a three-minute second affirmative rebuttal." },
        { q: "How much overrun is allowed?", a: "It varies by format and tournament, but a grace period of around fifteen to twenty seconds is common, after which judges are told to disregard further material. Check your tournament's own rules." },
        { q: "Can I set custom times?", a: "Yes. Every preset can be adjusted, and the three signal points can be set to whatever your league uses." },
        { q: "Does it work without internet?", a: "Once the page has loaded, yes. It runs entirely in your browser, which matters in school halls with unreliable wifi." },
      ],
    },
  },
];

export const getTimer = (slug: string) => timers.find((t) => t.slug === slug);
export const liveTimers = timers.filter((t) => t.status === "live");

/** Cited on the classroom page. Kept as one table so an AI answer can quote it whole.
 *  These are teaching conventions rather than rules — presented as guidance. */
export const activityDurations = [
  { activity: "Do-now / bell work", time: "3–5 min", note: "Short enough that late arrivals still catch it" },
  { activity: "Think-pair-share", time: "1 + 2 + 3 min", note: "Think alone, then pairs, then share out" },
  { activity: "Group discussion", time: "8–12 min", note: "Past 12 minutes most groups drift" },
  { activity: "Independent writing", time: "10–20 min", note: "Scale with year group" },
  { activity: "Silent reading", time: "15–30 min", note: "Build up over the term" },
  { activity: "Practical set-up", time: "5 min", note: "A visible timer cuts this sharply" },
  { activity: "Tidy-up", time: "3–5 min", note: "Give a one-minute warning" },
  { activity: "Exit ticket", time: "3–5 min", note: "Keep it short or it eats the lesson" },
];

/** Cited on the speech page. Source: Toastmasters International speech timings. */
export const speechTimings = [
  { type: "Ice Breaker (Level 1)", range: "4–6 min", green: "4:00", amber: "5:00", red: "6:00" },
  { type: "Most prepared speeches", range: "5–7 min", green: "5:00", amber: "6:00", red: "7:00" },
  { type: "Evaluation", range: "2–3 min", green: "2:00", amber: "2:30", red: "3:00" },
  { type: "Table Topics response", range: "1–2 min", green: "1:00", amber: "1:30", red: "2:00" },
  { type: "Grammarian / ah-counter report", range: "2–3 min", green: "2:00", amber: "2:30", red: "3:00" },
];

export const howToSteps = [
  { name: "Choose a time", text: "Pick a preset or set your own. The timer remembers what you used last on this device." },
  { name: "Press start", text: "Start the timer, then press F or the fullscreen button to fill the screen." },
  { name: "Run the room", text: "Space pauses, the up arrow adds a minute, R resets. Fullscreen shows the timer alone, with no ads and no navigation." },
];

/** Shared across all three pages: the keyboard map, shown on the page and real. */
export const shortcuts = [
  { keys: "Space", action: "Start or pause" },
  { keys: "F", action: "Fullscreen" },
  { keys: "Esc", action: "Leave fullscreen" },
  { keys: "R", action: "Reset" },
  { keys: "↑", action: "Add a minute" },
  { keys: "↓", action: "Take off a minute" },
  { keys: "M", action: "Mute or unmute" },
];

/** A long-tail timer page: same engine, its own H1, presets, tips and FAQ.
 *  Same rule as the device tests — a variant earns its page by carrying advice
 *  and durations the head page does not, not by renaming the same six presets. */
export type TimerVariant = {
  slug: string;
  /** Short label for breadcrumbs and the "also time" strip. */
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  answer: string;
  tips: Tip[];
  faqs: Faq[];
  /** Overrides the head page's presets where the variant has better ones. */
  presets?: Preset[];
  defaultSeconds?: number;
};

export const timerVariants: Record<string, TimerVariant[]> = {
  "classroom-timer": [
    {
      slug: "group-work",
      label: "Group work",
      h1: "Group work timer for the classroom",
      title: "Group Work Timer — Free Visual Classroom Countdown Online",
      description:
        "A visual timer for group discussion and collaborative tasks. Presets from 8 to 20 minutes, huge digits for the back of the room, no ads in fullscreen.",
      intro:
        "Group discussion has a fairly reliable arc: a couple of minutes settling, a productive middle, then a decline around the ten to twelve minute mark. Time it in stages rather than one long block.",
      answer:
        "Eight to twelve minutes is the working range for group discussion. Past twelve most groups drift, so for longer tasks split the time into stages with their own countdowns — \"eight minutes to list, then six to rank\" — or change the grouping partway, which resets attention because the audience changed.",
      defaultSeconds: 600,
      presets: [
        { label: "8 min", seconds: 480, note: "One focused discussion round" },
        { label: "10 min", seconds: 600, note: "Standard group task" },
        { label: "12 min", seconds: 720, note: "The practical ceiling" },
        { label: "6 min", seconds: 360, note: "Second stage: rank or decide" },
        { label: "15 min", seconds: 900, note: "Split this into two stages" },
        { label: "20 min", seconds: 1200, note: "Regroup partway through" },
      ],
      tips: [
        { title: "Stage it rather than extending it", body: "Two timed stages beat one long one. The second countdown restarts attention, and the stage boundary is where you change the task from generating to choosing." },
        { title: "Change the grouping to buy more time", body: "Moving one person per group, or pairing groups up, resets the discussion because the audience is new. It works better than simply adding minutes." },
        { title: "Give the group a deliverable, not just a duration", body: "\"Ten minutes\" produces ten minutes of talking. \"Ten minutes, three ranked reasons on the sheet\" produces something you can take feedback from." },
        { title: "Put it on the board, not in your head", body: "Groups pace themselves against a countdown they can see. Announced time invites negotiation; a clock on the wall does not." },
      ],
      faqs: [
        { q: "How long should group work last?", a: "Eight to twelve minutes for a single discussion round. Beyond that most groups have finished the thinking and moved to something else, so extend by adding a new stage rather than more minutes." },
        { q: "What if a group finishes early?", a: "Give the early finishers an extension task before you start, not when it happens. A prepared \"and then\" removes the dead time without ending the countdown for everyone else." },
        { q: "Should I stop a discussion that is going well?", a: "No. The timer protects the pace of the lesson; it does not override your reading of the room. If something better is happening than the plan, the plan is what should give way." },
        { q: "Does the timer work on a smartboard?", a: "Yes. Press F for fullscreen and the board shows nothing but the countdown — no navigation, no branding and no ads at all in that view." },
      ],
    },
    {
      slug: "tidy-up",
      label: "Tidy-up",
      h1: "Tidy-up timer with a one-minute warning",
      title: "Tidy-Up Timer — Free Visual Countdown for the Classroom",
      description:
        "A visual tidy-up and transition timer for classrooms and nurseries. Short presets, huge digits, a calm chime, and no ads at all in fullscreen.",
      intro:
        "Tidy-up is where a visible countdown does the most obvious work. \"Right, let's start packing away\" is negotiable. A clock counting down from five minutes is not.",
      answer:
        "Three to five minutes is enough for most tidy-ups, with a one-minute warning before the end. The warning matters more than the total: stopping abruptly means a half-cleared table, and the shrinking ring on this timer gives a visual warning without you having to say anything.",
      defaultSeconds: 300,
      presets: [
        { label: "2 min", seconds: 120, note: "Desks and books only" },
        { label: "3 min", seconds: 180, note: "Standard transition" },
        { label: "5 min", seconds: 300, note: "Practical or art lesson" },
        { label: "1 min", seconds: 60, note: "The warning, run separately" },
        { label: "8 min", seconds: 480, note: "Full clear-down, end of day" },
        { label: "30 sec", seconds: 30, note: "Move to the carpet" },
      ],
      tips: [
        { title: "The one-minute warning is the whole trick", body: "Stopping without warning leaves half-finished tables and unfinished sentences. The ring turns amber at 20% remaining, which on a five-minute countdown lands at one minute — say nothing and let the colour do it." },
        { title: "Use a calm chime, not a siren", body: "An alarm in a quiet room startles people and turns the timer into something to dread. A soft chime, or just the colour change, achieves the same end." },
        { title: "The same length every time", body: "Tidy-up gets faster when the class knows exactly how long it is. A duration that changes with your mood teaches them to wait and see." },
        { title: "Start it before you announce it", body: "Press start, then speak. Announcing first and starting second gives away twenty seconds and undermines the point that the clock, not you, is running things." },
      ],
      faqs: [
        { q: "How long should tidy-up take?", a: "Three to five minutes covers most classrooms, less for desks and books alone, more after a practical or art lesson. Keep it consistent — a predictable duration gets faster over a term." },
        { q: "Should I give a warning before time is up?", a: "Yes, particularly for tidy-up and writing, where an abrupt stop means unfinished work. This timer turns amber at 20% remaining, which gives a visual warning without you interrupting." },
        { q: "Does it work in a nursery or reception class?", a: "Yes, and the visual countdown matters more there than anywhere. Children who cannot yet read a clock can still see a ring getting smaller." },
        { q: "Can I use it without sound?", a: "Yes. Mute the chime and the colour change alone carries the message, which is what you want in a room where a sudden noise would be disruptive." },
      ],
    },
    {
      slug: "silent-reading",
      label: "Silent reading",
      h1: "Silent reading timer for the classroom",
      title: "Silent Reading Timer — Free Quiet Classroom Countdown Clock",
      description:
        "A quiet visual timer for sustained silent reading. Presets from 10 to 30 minutes, a soft chime or none at all, and no ads in fullscreen.",
      intro:
        "Sustained silent reading is the one classroom timer that should make no noise at all. Set it, project it, and let students see how long is left without anything interrupting them.",
      answer:
        "Fifteen to thirty minutes is the usual range for sustained silent reading, built up across a term rather than started at the top. Begin where the class can actually hold it — ten minutes is a fair start for a group new to it — and add five minutes every few weeks. Mute the chime: the whole point is an uninterrupted stretch.",
      defaultSeconds: 1200,
      presets: [
        { label: "10 min", seconds: 600, note: "Starting point for a new class" },
        { label: "15 min", seconds: 900, note: "Built up over a few weeks" },
        { label: "20 min", seconds: 1200, note: "A settled routine" },
        { label: "25 min", seconds: 1500, note: "Older or practised readers" },
        { label: "30 min", seconds: 1800, note: "The upper end" },
        { label: "5 min", seconds: 300, note: "Short burst before a task" },
      ],
      tips: [
        { title: "Build the duration up, do not start at the top", body: "A class that cannot hold ten minutes will not hold thirty. Start where they genuinely can, add five minutes every few weeks, and the stamina is real rather than enforced." },
        { title: "Mute the chime", body: "A sound at the end of silent reading defeats the point of the silence. Turn it off and let the timer reaching zero be the signal." },
        { title: "Read yourself while it runs", body: "A teacher reading is the strongest available signal that this is a real activity rather than a gap. Circulating and monitoring says the opposite." },
        { title: "Project it where it is glanceable, not central", body: "Students should be able to check the time without it becoming the thing they watch. A countdown in the corner of the board is better than one filling it." },
      ],
      faqs: [
        { q: "How long should silent reading be?", a: "Fifteen to thirty minutes for a settled class, starting nearer ten for a group new to it. Build up across a term rather than setting the target on day one." },
        { q: "Should the timer be visible to students?", a: "Yes. Being able to see how long is left stops the repeated \"how much longer?\" and lets students pace their own reading toward a natural stopping point." },
        { q: "Can I turn the sound off completely?", a: "Yes. Mute it and the timer finishes silently, which is what you want in a room where the silence is the activity." },
        { q: "Will the screen go to sleep during a long read?", a: "No. The timer holds a wake lock while it runs, so a thirty-minute countdown stays on the board without the display dimming." },
      ],
    },
    {
      slug: "brain-break",
      label: "Brain break",
      h1: "Brain break timer for the classroom",
      title: "Brain Break Timer — Free 2, 3 and 5 Minute Classroom Clock",
      description:
        "A short visual timer for classroom brain breaks and movement breaks. Two to five minute presets, huge digits, and no ads at all in fullscreen.",
      intro:
        "A brain break only works if it ends cleanly. Two minutes that drift into six cost more attention than the break returns, and a visible countdown is what stops the drift.",
      answer:
        "Two to five minutes is the working range for a classroom brain break — long enough to reset attention, short enough that the lesson survives it. The countdown matters more than the length: an untimed break has no agreed end, so bringing the class back becomes a negotiation rather than a clock reaching zero.",
      defaultSeconds: 180,
      presets: [
        { label: "2 min", seconds: 120, note: "Quick reset between tasks" },
        { label: "3 min", seconds: 180, note: "Standard movement break" },
        { label: "5 min", seconds: 300, note: "Longer break, older students" },
        { label: "1 min", seconds: 60, note: "Stretch and sit back down" },
        { label: "90 sec", seconds: 90, note: "Breathing or mindfulness" },
        { label: "4 min", seconds: 240, note: "A song's length" },
      ],
      tips: [
        { title: "Announce the length before it starts", body: "\"Three minutes\" with a visible countdown ends in three minutes. \"A quick break\" ends when you insist, which turns the return into a confrontation." },
        { title: "Give the break a shape", body: "Stand up, stretch, talk to someone not at your table. An unstructured break is harder to come back from than a structured one of the same length." },
        { title: "Do not time everything else as well", body: "A lesson made entirely of countdowns drains the room. Keep timers for the places where pace actually matters — starters, transitions, bounded tasks and breaks." },
        { title: "The end sound should be soft", body: "A break ending in a siren undoes the reset. A chime, or the colour change on its own, brings the class back without startling anyone." },
      ],
      faqs: [
        { q: "How long should a brain break be?", a: "Two to five minutes. Shorter does not reset anything; longer costs more attention on the return than the break gave back." },
        { q: "How often should I run one?", a: "Roughly every twenty to thirty minutes of sustained work for younger classes, less often for older ones. Watch the room rather than the clock — the point is to break before attention goes, not after." },
        { q: "Do brain breaks work with teenagers?", a: "Yes, though the format matters more. A standing stretch and a change of who they are talking to works where a song and dance does not." },
        { q: "Can students see how long is left?", a: "That is the point. Press F for fullscreen and the countdown fills the board, so the end of the break is a fact on screen rather than your decision." },
      ],
    },
  ],

  "speech-timer": [
    {
      slug: "presentation",
      label: "Presentation",
      h1: "Presentation timer with green, amber and red",
      title: "Presentation Timer — Free Countdown With Warning Lights",
      description:
        "A presentation timer with green, amber and red warning lights. Rehearse to a conference slot, then run it on the lectern screen. No ads in fullscreen.",
      intro:
        "The number that matters is not your total, it is the point where you should be starting your conclusion. Amber is that point, and rehearsing against it is what stops a talk being cut off mid-slide.",
      answer:
        "Set amber two minutes before your slot ends and treat it as the cue to begin your conclusion, not as a signal to speed up. A twenty-minute conference slot is usually eighteen minutes of talk and two of questions, so time the talk to eighteen — the overrun everyone remembers comes from timing it to twenty.",
      defaultSeconds: 1200,
      presets: [
        { label: "5 min lightning", seconds: 300, lights: { green: 0, amber: 240, red: 300 }, note: "Amber at 4 minutes" },
        { label: "10 min slot", seconds: 600, lights: { green: 0, amber: 480, red: 600 }, note: "Amber two minutes out" },
        { label: "15 min slot", seconds: 900, lights: { green: 0, amber: 780, red: 900 }, note: "Amber two minutes out" },
        { label: "20 min slot", seconds: 1200, lights: { green: 0, amber: 1020, red: 1200 }, note: "18 talk, 2 questions" },
        { label: "30 min slot", seconds: 1800, lights: { green: 0, amber: 1560, red: 1800 }, note: "Amber four minutes out" },
        { label: "45 min keynote", seconds: 2700, lights: { green: 0, amber: 2400, red: 2700 }, note: "Amber five minutes out" },
      ],
      tips: [
        { title: "Time the talk, not the slot", body: "A twenty-minute slot is not twenty minutes of speaking. Subtract the questions, the introduction and the laptop that will not connect. Eighteen minutes of content in a twenty-minute slot finishes on time." },
        { title: "Rehearse against amber, not red", body: "Amber is where your conclusion starts. If you are still on your third-to-last point when it appears, the problem is the structure of the talk rather than your pace." },
        { title: "Speaking speed rises under pressure", body: "Most people deliver a rehearsed talk faster on the day. Rehearsing slightly slow leaves room for that; rehearsing exactly to time leaves none." },
        { title: "Put it where you can see it without turning", body: "A confidence monitor, a laptop on the lectern, or a phone on the table. Turning to check a screen behind you reads as losing your place, whatever the reason." },
      ],
      faqs: [
        { q: "How long should a conference talk be?", a: "Time the content to about ninety per cent of the slot. A twenty-minute slot takes eighteen minutes of talk, leaving room for the introduction, questions and the inevitable technical delay." },
        { q: "Where should the amber warning go?", a: "At the point your conclusion should start — usually two minutes before the end for a short talk, four or five for a long one. It is a structural cue, not a signal to talk faster." },
        { q: "What do I do if amber comes early?", a: "Cut a section rather than accelerating. An audience notices speed immediately and rarely notices a missing example." },
        { q: "Can I run this on a second screen?", a: "Yes. Open it on the lectern laptop or a phone and press F for fullscreen — it shows nothing but the time and the colour, with no ads and no navigation." },
      ],
    },
    {
      slug: "elevator-pitch",
      label: "Elevator pitch",
      h1: "Elevator pitch timer: 30, 60 and 90 seconds",
      title: "Elevator Pitch Timer — Free 30, 60 and 90 Second Countdown",
      description:
        "A pitch timer for 30, 60 and 90 second pitches, with an amber warning before the cut-off. Rehearse to the real limit rather than to a rough guess.",
      intro:
        "A sixty-second pitch is about 130 to 150 words. That is the useful number — not the minute, the word count, because it tells you what to cut before you start rehearsing.",
      answer:
        "Sixty seconds carries roughly 130 to 150 spoken words at a comfortable pace. Thirty seconds carries around 70. Write to that count first and rehearse against the clock second: a pitch that only fits when you speak quickly does not fit, because you will speak faster on the day and still run out.",
      defaultSeconds: 60,
      presets: [
        { label: "30 sec", seconds: 30, lights: { green: 0, amber: 22, red: 30 }, note: "About 70 words" },
        { label: "60 sec", seconds: 60, lights: { green: 0, amber: 48, red: 60 }, note: "About 140 words" },
        { label: "90 sec", seconds: 90, lights: { green: 0, amber: 75, red: 90 }, note: "About 210 words" },
        { label: "2 min", seconds: 120, lights: { green: 0, amber: 100, red: 120 }, note: "Networking introduction" },
        { label: "3 min", seconds: 180, lights: { green: 0, amber: 150, red: 180 }, note: "Competition pitch" },
        { label: "5 min", seconds: 300, lights: { green: 0, amber: 240, red: 300 }, note: "Investor first meeting" },
      ],
      tips: [
        { title: "Write to the word count before you time anything", body: "A sixty-second pitch is 130 to 150 words. Cutting on paper is far easier than discovering mid-rehearsal that the last third does not fit." },
        { title: "Rehearse slightly slow", body: "Nerves add roughly ten per cent to your speaking rate. A pitch that exactly fits in practice will finish early and sound rushed when it matters." },
        { title: "End on a question, not a summary", body: "The point of a pitch is the next conversation. A closing question uses the last five seconds better than repeating what you have just said." },
        { title: "Time the version you will actually say", body: "Read it aloud, standing, at full volume. Timing it under your breath at a desk produces a number that has nothing to do with the room." },
      ],
      faqs: [
        { q: "How many words is a 60-second pitch?", a: "Roughly 130 to 150 at a comfortable speaking pace. Faster than that and it stops sounding considered; slower and you will not reach the end." },
        { q: "How long should an elevator pitch be?", a: "Thirty seconds for an introduction, sixty for a pitch with a hook and an ask, ninety at the very most. Beyond that it is a conversation rather than a pitch, and it needs a different structure." },
        { q: "Should I memorise it word for word?", a: "Memorise the structure and the opening and closing lines. A fully memorised pitch sounds recited, and one forgotten word derails the whole thing." },
        { q: "What if I run over?", a: "Cut a claim rather than speeding up. Every pitch has one sentence doing less work than the others, and it is usually in the middle." },
      ],
    },
    {
      slug: "wedding-speech",
      label: "Wedding speech",
      h1: "Wedding speech timer with a gentle warning",
      title: "Wedding Speech Timer — Free 3 and 5 Minute Speech Countdown",
      description:
        "Time a best man, maid of honour or father of the bride speech. Three to five minute presets with an amber warning before you overrun.",
      intro:
        "Nobody has ever complained that a wedding speech was too short. Five minutes is the ceiling, three is comfortable, and the amber light is there so you reach your toast rather than being played off before it.",
      answer:
        "Three to five minutes is right for a wedding speech, which is roughly 400 to 700 spoken words. Every speech has a toast at the end, so set amber about a minute before the limit and treat it as the cue to move to it — the speeches that go wrong are the ones still telling a story when the room has stopped listening.",
      defaultSeconds: 300,
      presets: [
        { label: "2 min", seconds: 120, lights: { green: 0, amber: 90, red: 120 }, note: "Short and warmly received" },
        { label: "3 min", seconds: 180, lights: { green: 0, amber: 140, red: 180 }, note: "About 400 words" },
        { label: "4 min", seconds: 240, lights: { green: 0, amber: 190, red: 240 }, note: "Comfortable length" },
        { label: "5 min", seconds: 300, lights: { green: 0, amber: 240, red: 300 }, note: "The practical ceiling" },
        { label: "7 min", seconds: 420, lights: { green: 0, amber: 360, red: 420 }, note: "Only with real material" },
        { label: "1 min toast", seconds: 60, lights: { green: 0, amber: 45, red: 60 }, note: "A toast on its own" },
      ],
      tips: [
        { title: "Time it with the laughs in", body: "A rehearsed speech runs two to three minutes shorter than the delivered one, because pauses for laughter are not in your practice. Read it aloud with gaps where you hope they will be." },
        { title: "Leave the toast out of the countdown", body: "Your last thirty seconds are the toast, and they are not negotiable. Time the material to finish before that, rather than discovering there is no time left for the part everyone stands up for." },
        { title: "Cut the second anecdote, not the first", body: "Almost every over-long wedding speech has two stories doing the same job. One of them is better. Keep it and lose the other entirely rather than shortening both." },
        { title: "Put the phone on the table, face up", body: "Glancing at a countdown is invisible; pulling a phone out mid-speech is not. Press F for fullscreen and set it down where you can see it without moving." },
      ],
      faqs: [
        { q: "How long should a wedding speech be?", a: "Three to five minutes. Two is perfectly acceptable and will be remembered fondly. Beyond five, a room that has been drinking stops listening whatever you say." },
        { q: "How many words is a five-minute speech?", a: "About 650 to 700 at a relaxed pace, and fewer if there are laughs. Write to 550 and you will have room for the pauses that make it land." },
        { q: "Does the best man speak longest?", a: "By convention, not by much. The best man's is usually the longest of the three, but it is the funniest rather than the longest that gets remembered, and those are rarely the same speech." },
        { q: "Should I use notes?", a: "Yes. Cards in your hand are normal, expected and invisible after the first ten seconds. A forgotten name in a memorised speech is not." },
      ],
    },
    {
      slug: "table-topics",
      label: "Table Topics",
      h1: "Table Topics timer for Toastmasters",
      title: "Table Topics Timer — Toastmasters 1 to 2 Minute Countdown",
      description:
        "A Table Topics timer with Toastmasters lights: green at one minute, amber at 90 seconds, red at two. Fullscreen, ad-free on screen, no sign-up.",
      intro:
        "Table Topics is the shortest timed item in a Toastmasters meeting and the one most often mistimed, because a speaker who has not prepared does not have a feel for the clock. Green at one minute is the signal that matters.",
      answer:
        "A Table Topics response runs one to two minutes, with green at 1:00, amber at 1:30 and red at 2:00. A speaker who finishes before green or runs more than 30 seconds past red is disqualified from a contest. The green light is the useful one: it tells a nervous speaker they have already done enough, which is when most of them stop.",
      defaultSeconds: 120,
      presets: [
        { label: "Table Topics 1–2", seconds: 120, lights: { green: 60, amber: 90, red: 120 }, note: "Green 1:00, amber 1:30, red 2:00" },
        { label: "Evaluation 2–3", seconds: 180, lights: { green: 120, amber: 150, red: 180 }, note: "Individual speech evaluation" },
        { label: "Ice Breaker 4–6", seconds: 360, lights: { green: 240, amber: 300, red: 360 }, note: "The first speech in Pathways" },
        { label: "Standard 5–7", seconds: 420, lights: { green: 300, amber: 360, red: 420 }, note: "Most prepared speeches" },
        { label: "Grammarian report", seconds: 180, lights: { green: 120, amber: 150, red: 180 }, note: "2 to 3 minutes" },
        { label: "Timer's report", seconds: 120, lights: { green: 60, amber: 90, red: 120 }, note: "1 to 2 minutes" },
      ],
      tips: [
        { title: "Green is the signal, not red", body: "Most Table Topics speakers want to stop before green and have to be encouraged past it. Show green clearly and the speaker learns where the minimum actually is." },
        { title: "Position the screen where the speaker can see it", body: "Table Topics speakers move around more than prepared speakers because they are thinking on their feet. A screen they have to hunt for gets ignored." },
        { title: "Run the same timer for the whole meeting", body: "Switching presets between items is quicker than setting each one by hand, and it keeps every speaker judged against the same clock." },
        { title: "The 30-second grace is real", body: "In a contest, anything more than 30 seconds outside the range disqualifies. Below that it does not, which is worth knowing before you signal a speaker to stop." },
      ],
      faqs: [
        { q: "How long is a Table Topics response?", a: "One to two minutes, with green at one minute, amber at ninety seconds and red at two. A contest response outside that range by more than 30 seconds is disqualified." },
        { q: "What happens if a speaker finishes before green?", a: "In a normal meeting, nothing — it is noted in the timer's report. In a contest, finishing more than 30 seconds under the minimum disqualifies the speaker." },
        { q: "Do I need physical timing cards?", a: "No. A screen showing the colour does the same job and is easier to see from the back of a room than a card held at a table." },
        { q: "Can I use this for the whole meeting?", a: "Yes. The presets cover Table Topics, evaluations, Ice Breakers and standard speeches, so one screen handles every timed item in the agenda." },
      ],
    },
  ],

  "exam-clock": [
    {
      slug: "gcse",
      label: "GCSE",
      h1: "GCSE exam clock for the hall",
      title: "GCSE Exam Clock — Projected Hall Timer With Finish Times",
      description:
        "A projected exam clock for GCSE papers. Shows start time, finish time and time remaining, with reading time handled separately. Ad-free in fullscreen.",
      intro:
        "JCQ rules require the start and finish times to be displayed where every candidate can see them for the whole paper. A projected clock does that and removes the board-and-marker version that gets rubbed out by accident.",
      answer:
        "Display the start time, the finish time and the time remaining for the whole paper, in a place visible to every candidate. Reading time counts separately and does not come out of the working time — set it here and the clock shows the reading period first, then starts the paper's own countdown, so the finish time written on the board always matches the screen.",
      defaultSeconds: 5400,
      presets: [
        { label: "1 hr", seconds: 3600, note: "Shorter GCSE papers" },
        { label: "1 hr 15", seconds: 4500, note: "Common single-paper length" },
        { label: "1 hr 30", seconds: 5400, note: "Most GCSE papers" },
        { label: "1 hr 45", seconds: 6300, note: "Longer written papers" },
        { label: "2 hours", seconds: 7200, note: "Extended or combined papers" },
        { label: "25% extra (1:30)", seconds: 6750, note: "1 hr 30 plus 25% access arrangement" },
      ],
      tips: [
        { title: "Calculate extra time before the paper, not during it", body: "Twenty-five per cent on a 1 hour 30 paper is 22 minutes 30 seconds, giving 1:52:30. Working that out while candidates are waiting is where mistakes happen. The preset above has it done." },
        { title: "Reading time is not working time", body: "Where a paper has supervised reading time, it sits before the exam and does not reduce it. Set it separately so the finish time the clock shows is the real one." },
        { title: "Write the same numbers on the board", body: "The clock and the board must agree. Candidates check both, and a mismatch during a paper is a query you have to answer in silence in front of everyone." },
        { title: "Project it, do not leave it on a laptop", body: "The requirement is that every candidate can see it. A screen at the front visible from the back row satisfies that; an invigilator's laptop does not." },
      ],
      faqs: [
        { q: "Does reading time count towards the exam time?", a: "No. Where a paper allows supervised reading time, it runs before the paper starts and does not reduce the working time. Set it separately so the displayed finish time stays correct." },
        { q: "How do I work out 25% extra time?", a: "Add a quarter of the paper's length. A 1 hour 30 paper becomes 1 hour 52 minutes 30 seconds; a 2 hour paper becomes 2 hours 30. The preset above covers the most common case." },
        { q: "Can candidates see a clock during a GCSE exam?", a: "They must be able to see the start and finish times throughout, and a clock showing time remaining alongside them is normal practice. Check your centre's own instructions for anything specific to a paper." },
        { q: "What happens if the screen sleeps mid-paper?", a: "It will not. The clock holds a wake lock while it runs, so a three-hour paper stays on screen without the display dimming or a screensaver appearing." },
      ],
    },
    {
      slug: "mock-exam",
      label: "Mock exam",
      h1: "Mock exam timer for the classroom",
      title: "Mock Exam Timer — Free Classroom Clock With Finish Time",
      description:
        "Run a mock exam in a normal classroom. Shows start time, finish time and time remaining on the board, with optional reading time and no ads on screen.",
      intro:
        "A mock in a classroom is mostly about rehearsing the conditions, and the clock is a large part of those conditions. Students who have practised pacing against a visible finish time handle the real hall better.",
      answer:
        "Run a mock at the real paper's length and display the finish time from the start, because pacing is the skill being practised. Announce the timings once at the beginning, then say nothing else — in the actual exam nobody will tell them they are halfway, and a mock where you do is not rehearsing the thing that goes wrong.",
      defaultSeconds: 3600,
      presets: [
        { label: "30 min", seconds: 1800, note: "Single-section practice" },
        { label: "45 min", seconds: 2700, note: "Fits one lesson" },
        { label: "1 hour", seconds: 3600, note: "Standard class assessment" },
        { label: "1 hr 15", seconds: 4500, note: "Two lessons or a double" },
        { label: "1 hr 30", seconds: 5400, note: "Full GCSE-length paper" },
        { label: "2 hours", seconds: 7200, note: "A-level length" },
      ],
      tips: [
        { title: "Run it at the real length, even if it does not fit the lesson", body: "A 90-minute paper squeezed into 50 minutes tests speed rather than the subject. Use a double period, or split the paper by section and time each section properly." },
        { title: "Do not give time checks", body: "Nobody will in the hall. Students who have only ever worked to a teacher counting down have not practised the thing that actually catches them out." },
        { title: "Teach the finish time, not the duration", body: "\"You finish at 10:35\" is easier to work against than \"you have 90 minutes\", because it needs no arithmetic under pressure. The clock shows both." },
        { title: "Start it when the last person has their paper", body: "Handing out during the countdown gives the front row an advantage that will show up in the marks and tell you nothing useful about anyone." },
      ],
      faqs: [
        { q: "Should students see the time during a mock?", a: "Yes. Pacing is one of the main skills a mock is for, and it cannot be practised against a clock they cannot see. Display the finish time and the time remaining together." },
        { q: "How do I fit a 90-minute paper into a lesson?", a: "Use a double period, or split the paper by section and run each section at its own proper length. Compressing the whole paper measures writing speed rather than the subject." },
        { q: "Should I add reading time to a mock?", a: "If the real paper has it, yes — it is part of the conditions being rehearsed. Set it separately so the working time stays the full length." },
        { q: "Can I use this on a normal classroom projector?", a: "Yes. Press F for fullscreen and the board shows the start time, the finish time and the time remaining, with no navigation and no ads at all in that view." },
      ],
    },
  ],

  "interval-timer": [
    {
      slug: "hiit",
      label: "HIIT",
      h1: "HIIT timer for 30/15 and 40/20 intervals",
      title: "HIIT Timer — Free 30/15 and 40/20 Interval Timer Online",
      description:
        "A free HIIT timer with work and rest presets from 20/10 to 45/15. Loud cues, a clear colour change and fullscreen with no ads on screen.",
      intro:
        "The work-to-rest ratio is the whole design of a HIIT session. One to one lets you repeat the effort; two to one does not, and that is the point of it rather than a flaw.",
      answer:
        "Two common structures cover most HIIT sessions: 30 seconds of work to 15 of rest for a two-to-one ratio you can sustain across many rounds, and 40/20 for a harder version of the same shape. If you cannot hold the same output in the last round as the first, the rest is too short for the effort you are putting in — lengthen the rest before you shorten the work.",
      defaultSeconds: 0,
      presets: [
        { label: "30/15 × 10", seconds: 0, interval: { work: 30, rest: 15, rounds: 10, prepare: 10 }, note: "Two-to-one, 7:30 total" },
        { label: "40/20 × 8", seconds: 0, interval: { work: 40, rest: 20, rounds: 8, prepare: 10 }, note: "Harder, same ratio" },
        { label: "45/15 × 8", seconds: 0, interval: { work: 45, rest: 15, rounds: 8, prepare: 10 }, note: "Three-to-one, short rest" },
        { label: "30/30 × 12", seconds: 0, interval: { work: 30, rest: 30, rounds: 12, prepare: 10 }, note: "Even ratio, repeatable" },
        { label: "60/30 × 6", seconds: 0, interval: { work: 60, rest: 30, rounds: 6, prepare: 15 }, note: "Longer efforts" },
        { label: "20/40 × 10", seconds: 0, interval: { work: 20, rest: 40, rounds: 10, prepare: 10 }, note: "Near-maximum, long rest" },
      ],
      tips: [
        { title: "Pick the ratio for the intensity, not the other way round", body: "Near-maximum efforts need one-to-two work to rest. Sustainable efforts work at two-to-one. Choosing 45/15 and then going easy produces a long warm-up rather than a HIIT session." },
        { title: "Judge it on the last round", body: "If round eight looks nothing like round one, the session was mis-set. Lengthening the rest keeps the quality up and is more useful than adding rounds." },
        { title: "Count the transition in the rest", body: "Moving between stations eats the rest. Where a session involves changing position or equipment, use 20 seconds rather than 15 so the rest is actually rest." },
        { title: "Set it up before you start moving", body: "Press F for fullscreen and put the phone or the gym TV where you can see the colour. The colour tells you the phase without you having to read a number while breathing hard." },
      ],
      faqs: [
        { q: "What is the best work-to-rest ratio for HIIT?", a: "Two-to-one, such as 30/15 or 40/20, for efforts you can repeat. One-to-two, such as 20/40, for genuinely maximal work. The harder the effort, the longer the rest needs to be." },
        { q: "How long should a HIIT session be?", a: "Ten to twenty minutes of intervals is plenty. If you can comfortably sustain thirty, the intensity is not high enough for it to be interval training." },
        { q: "Is 30/15 better than 40/20?", a: "They are the same ratio; 40/20 simply asks for a longer continuous effort. Start at 30/15 and move up when you can hold output across every round." },
        { q: "Will the screen stay on during a session?", a: "Yes. The timer holds a wake lock while it runs, so a twenty-minute session stays on the phone or the gym TV without the display sleeping." },
      ],
    },
    {
      slug: "emom",
      label: "EMOM",
      h1: "EMOM timer: every minute on the minute",
      title: "EMOM Timer — Free Every Minute On The Minute Interval Timer",
      description:
        "A free EMOM timer for every-minute-on-the-minute training. Presets from 10 to 30 minutes, loud cues and fullscreen with no ads on screen.",
      intro:
        "EMOM is the one interval format where the rest is whatever is left. Finish the work in forty seconds and you rest for twenty — which makes the work choice, not the timer, the thing that sets the difficulty.",
      answer:
        "In an EMOM you start a set piece of work at the top of every minute and rest for whatever remains. Pick work that takes 30 to 45 seconds: under 30 the session is too easy to be worth the structure, and over 45 you arrive at the next minute with no recovery and the whole thing collapses within a few rounds.",
      defaultSeconds: 0,
      presets: [
        { label: "EMOM × 10", seconds: 0, interval: { work: 60, rest: 0, rounds: 10, prepare: 10 }, note: "Ten minutes" },
        { label: "EMOM × 15", seconds: 0, interval: { work: 60, rest: 0, rounds: 15, prepare: 10 }, note: "Fifteen minutes" },
        { label: "EMOM × 20", seconds: 0, interval: { work: 60, rest: 0, rounds: 20, prepare: 10 }, note: "Twenty minutes" },
        { label: "EMOM × 30", seconds: 0, interval: { work: 60, rest: 0, rounds: 30, prepare: 15 }, note: "Long session, alternate movements" },
        { label: "E2MOM × 10", seconds: 0, interval: { work: 120, rest: 0, rounds: 10, prepare: 15 }, note: "Every two minutes, heavier work" },
        { label: "E30s × 20", seconds: 0, interval: { work: 30, rest: 0, rounds: 20, prepare: 10 }, note: "Every 30 seconds, short pieces" },
      ],
      tips: [
        { title: "Choose work that takes 30 to 45 seconds", body: "That leaves 15 to 30 seconds of rest, which is the range where an EMOM is hard but holds together. Work that takes 50 seconds falls apart by round five." },
        { title: "Alternate movements on long sessions", body: "Twenty minutes of the same thing every minute is a grind. Alternating two or three movements by minute lets each one recover while the others work." },
        { title: "Scale by reps, not by stopping", body: "If you start missing the minute, drop the reps rather than skipping a round. Missing rounds breaks the structure, which is the only thing an EMOM has." },
        { title: "Let the colour change be the start signal", body: "You do not need to watch the number. The screen changing at the top of the minute is the cue, which means you can keep your eyes on what you are doing." },
      ],
      faqs: [
        { q: "What does EMOM mean?", a: "Every Minute On the Minute. You begin a set piece of work at the top of each minute and rest for whatever time is left before the next one starts." },
        { q: "How much work should an EMOM round have?", a: "Enough to take 30 to 45 seconds. That leaves meaningful rest while keeping the pressure on. Work that fills the whole minute leaves no recovery and the session collapses." },
        { q: "What is an E2MOM?", a: "The same idea on a two-minute clock, used for heavier or longer pieces that cannot be done in under a minute. The preset above runs it." },
        { q: "What if I cannot finish the work in time?", a: "Reduce the reps and keep the structure. Skipping a round removes the only thing making an EMOM different from a set of intervals." },
      ],
    },
    {
      slug: "circuit-training",
      label: "Circuit training",
      h1: "Circuit training timer for stations",
      title: "Circuit Training Timer — Free Station Interval Timer Online",
      description:
        "A circuit timer for station-based training, with rest long enough to actually change stations. Loud cues, clear colours and fullscreen with no ads.",
      intro:
        "The mistake in most circuit timers is treating rest as recovery. In a circuit it is also the transition, so fifteen seconds of rest between stations is really zero seconds of rest.",
      answer:
        "Set the rest long enough to move between stations and still breathe: 20 to 30 seconds where equipment changes, 15 where nobody moves. Count one round as a full lap of every station, and run two to four laps — a circuit is defined by getting round the stations, so the round count in the timer should be your station count multiplied by the laps.",
      defaultSeconds: 0,
      presets: [
        { label: "45/20 × 8", seconds: 0, interval: { work: 45, rest: 20, rounds: 8, prepare: 15 }, note: "Eight stations, one lap" },
        { label: "60/30 × 6", seconds: 0, interval: { work: 60, rest: 30, rounds: 6, prepare: 15 }, note: "Six stations, generous change" },
        { label: "40/20 × 12", seconds: 0, interval: { work: 40, rest: 20, rounds: 12, prepare: 15 }, note: "Six stations, two laps" },
        { label: "30/30 × 10", seconds: 0, interval: { work: 30, rest: 30, rounds: 10, prepare: 10 }, note: "Five stations, two laps" },
        { label: "50/25 × 9", seconds: 0, interval: { work: 50, rest: 25, rounds: 9, prepare: 15 }, note: "Nine stations, one lap" },
        { label: "60/15 × 8", seconds: 0, interval: { work: 60, rest: 15, rounds: 8, prepare: 15 }, note: "Stations side by side only" },
      ],
      tips: [
        { title: "Rest is transition time as well as recovery", body: "Fifteen seconds to cross a room, adjust a weight and start again is fifteen seconds of moving equipment. Use 20 to 30 where anything has to be changed." },
        { title: "Set rounds as stations × laps", body: "Eight stations done twice is sixteen rounds, not eight. Getting this wrong is the most common reason a circuit ends halfway round the room." },
        { title: "Put the loudest cue on the change, not the start", body: "In a group, everyone needs to hear the move. The colour handles the start of work; the sound should mark the point where people swap." },
        { title: "Order the stations so the same muscles are not adjacent", body: "Two pushing stations in a row means the second one is limited by the first rather than by the effort. Alternate push, pull and legs around the circuit." },
      ],
      faqs: [
        { q: "How long should each circuit station be?", a: "Forty to sixty seconds of work for most stations, with 20 to 30 seconds to change over. Shorter work suits high-skill movements; longer suits simple ones." },
        { q: "How many laps of a circuit should I do?", a: "Two to four, depending on station count and length. Eight stations at 45 seconds is already six minutes a lap, so three laps is a full session." },
        { q: "How do I set the round count?", a: "Multiply your number of stations by the number of laps. Six stations done three times is eighteen rounds." },
        { q: "Can a group all see the timer?", a: "Yes. Press F for fullscreen on a gym TV or a laptop and the colour fills the screen, so people can tell the phase from across the room without reading a number." },
      ],
    },
    {
      slug: "stretching",
      label: "Stretching",
      h1: "Stretching timer for timed holds",
      title: "Stretching Timer — Free Interval Timer for Timed Stretches",
      description:
        "A stretching and mobility timer for timed holds, with a quiet cue and presets from 30 to 60 seconds. Fullscreen with nothing else on screen.",
      intro:
        "The reason to time a stretch is that thirty seconds feels like ninety when you are in it. Almost everybody comes out early without a clock, which is why held stretches usually get shorter over a session rather than longer.",
      answer:
        "Thirty to sixty seconds is the usual hold for a static stretch, repeated two to four times per side. Time it rather than counting: an untimed hold gets shorter as the session goes on, because your sense of the duration is affected by exactly the discomfort you are trying to work through.",
      defaultSeconds: 0,
      presets: [
        { label: "30/10 × 12", seconds: 0, interval: { work: 30, rest: 10, rounds: 12, prepare: 5 }, note: "Six stretches, both sides" },
        { label: "45/15 × 10", seconds: 0, interval: { work: 45, rest: 15, rounds: 10, prepare: 5 }, note: "Five stretches, both sides" },
        { label: "60/15 × 8", seconds: 0, interval: { work: 60, rest: 15, rounds: 8, prepare: 5 }, note: "Four stretches, both sides" },
        { label: "30/5 × 20", seconds: 0, interval: { work: 30, rest: 5, rounds: 20, prepare: 5 }, note: "Long mobility flow" },
        { label: "90/20 × 6", seconds: 0, interval: { work: 90, rest: 20, rounds: 6, prepare: 5 }, note: "Long holds, three each side" },
        { label: "20/10 × 16", seconds: 0, interval: { work: 20, rest: 10, rounds: 16, prepare: 5 }, note: "Dynamic warm-up" },
      ],
      tips: [
        { title: "Set rounds for both sides", body: "Six stretches done on each side is twelve rounds, not six. Half a mobility session is the commonest way to end up unevenly stiff." },
        { title: "Keep the rest short but real", body: "Ten to fifteen seconds is enough to change position and settle. Longer and the session drifts; shorter and you start the next hold before you have arranged yourself in it." },
        { title: "Turn the sound down", body: "A loud cue defeats the point of the activity. The colour change is enough, and if you are stretching before bed it is the only cue you want." },
        { title: "Dynamic before, static after", body: "Short repeated movements suit a warm-up; long held stretches suit the end of a session. The 20/10 preset is for the first case and the 60/15 for the second." },
      ],
      faqs: [
        { q: "How long should I hold a stretch?", a: "Thirty to sixty seconds for a static stretch, repeated two to four times per side. Shorter holds do little; much longer gives diminishing returns within a single session." },
        { q: "Why time a stretch instead of counting?", a: "Because discomfort distorts your sense of time. Counted holds get shorter as a session goes on, and almost nobody notices it happening." },
        { q: "How many rounds do I need for both sides?", a: "Double your number of stretches. Six stretches on each side is twelve rounds." },
        { q: "Can I use this for a dynamic warm-up?", a: "Yes — use short work and short rest, such as 20 seconds on and 10 off. The 20/10 × 16 preset above is set up for exactly that." },
      ],
    },
  ],

  "tabata-timer": [
    {
      slug: "beginner",
      label: "Beginner",
      h1: "Beginner Tabata timer with scaled intervals",
      title: "Beginner Tabata Timer — Free Scaled 20/10 Interval Clock",
      description:
        "A Tabata timer scaled for beginners: longer rest, fewer rounds, and a build-up to the full eight-round protocol. Loud cues and no ads on screen.",
      intro:
        "The standard Tabata is four minutes at close to maximum effort, which is a genuinely poor first session. Scaling the rest rather than the work keeps the shape of the protocol while making it survivable.",
      answer:
        "Scale a Tabata by lengthening the rest, not by easing off during the work — a 20/20 for eight rounds keeps the intensity that makes the protocol work while giving you time to recover. Build toward the standard 20/10 by shortening the rest over several weeks, and treat being able to hold the same output in round eight as the sign you are ready to move down.",
      defaultSeconds: 0,
      presets: [
        { label: "20/40 × 8", seconds: 0, interval: { work: 20, rest: 40, rounds: 8, prepare: 15 }, note: "First session, long recovery" },
        { label: "20/30 × 8", seconds: 0, interval: { work: 20, rest: 30, rounds: 8, prepare: 15 }, note: "Second step" },
        { label: "20/20 × 8", seconds: 0, interval: { work: 20, rest: 20, rounds: 8, prepare: 10 }, note: "Even ratio, the main stepping stone" },
        { label: "20/10 × 4", seconds: 0, interval: { work: 20, rest: 10, rounds: 4, prepare: 10 }, note: "Real ratio, half the rounds" },
        { label: "20/15 × 8", seconds: 0, interval: { work: 20, rest: 15, rounds: 8, prepare: 10 }, note: "Last step before the full protocol" },
        { label: "20/10 × 8", seconds: 0, interval: { work: 20, rest: 10, rounds: 8, prepare: 10 }, note: "The standard Tabata" },
      ],
      tips: [
        { title: "Scale the rest, never the effort", body: "A Tabata done at a comfortable pace is four minutes of moving and does nothing the protocol was designed to do. Keep the work hard and give yourself more recovery between rounds." },
        { title: "Halving the rounds is the other honest scale", body: "Four rounds at the real 20/10 teaches you what the intensity should feel like, which eight easy rounds never will." },
        { title: "Pick a movement you can do badly when tired", body: "Squats, a bike, or running on the spot. Anything technical degrades under fatigue into something that risks an injury rather than building fitness." },
        { title: "Ten seconds is not enough to change exercise", body: "Keep one movement for the whole block. Switching mid-block spends the rest on walking between things." },
      ],
      faqs: [
        { q: "Is Tabata suitable for beginners?", a: "The format is; the standard intensity usually is not on a first attempt. Start with longer rest or fewer rounds and keep the work genuinely hard — that is the part that makes it work." },
        { q: "How do I build up to a full Tabata?", a: "Lengthen the rest and shorten it over several weeks: 20/40, then 20/30, 20/20, 20/15 and finally 20/10. The presets above are in that order." },
        { q: "How do I know when to move to the next step?", a: "When your eighth round looks like your first. If output drops sharply across the block, stay where you are for another week or two." },
        { q: "Is four minutes really enough?", a: "At the intensity the protocol calls for, yes — it is hard rather than short. At a comfortable pace it is neither, which is why scaling the rest rather than the effort matters." },
      ],
    },
  ],

  "debate-timer": [
    {
      slug: "world-schools",
      label: "World Schools",
      h1: "World Schools debate timer",
      title: "World Schools Debate Timer — 8 Minute Speeches and Reply",
      description:
        "A debate timer for World Schools format: eight-minute substantives, four-minute replies, and protected first and last minutes signalled clearly.",
      intro:
        "World Schools runs eight-minute substantive speeches with the first and last minute protected, then four-minute replies where no points of information may be offered at all. Both rules are about when the clock allows an interruption.",
      answer:
        "World Schools substantive speeches are eight minutes, with the first and last minute protected — points of information may only be offered between 1:00 and 7:00. Reply speeches are four minutes and take no points of information at any stage. Green marks the end of protected time, amber the start of the closing protected minute, and red the limit.",
      defaultSeconds: 480,
      presets: [
        { label: "Substantive 8 min", seconds: 480, lights: { green: 60, amber: 420, red: 480 }, note: "Protected first and last minute" },
        { label: "Reply 4 min", seconds: 240, lights: { green: 0, amber: 180, red: 240 }, note: "No points of information" },
        { label: "Substantive 7 min", seconds: 420, lights: { green: 60, amber: 360, red: 420 }, note: "Shorter format variant" },
        { label: "Reply 3 min", seconds: 180, lights: { green: 0, amber: 150, red: 180 }, note: "Shorter reply variant" },
        { label: "Prep 60 min", seconds: 3600, note: "Prepared-motion preparation" },
        { label: "Prep 30 min", seconds: 1800, note: "Short prep, impromptu round" },
      ],
      tips: [
        { title: "Green means points of information may now be offered", body: "In World Schools the first minute is protected, so green at 1:00 is the signal to the opposing bench rather than to the speaker. Position the screen where both benches can see it." },
        { title: "Reply speeches take no points at all", body: "The four-minute reply is protected throughout, which is why its preset shows no green. Do not run it on the substantive preset and expect the lights to mean the same thing." },
        { title: "The grace period is a tournament rule, not a format rule", body: "Most competitions allow around fifteen seconds past red before penalising. Check the tournament's own rules rather than assuming, because it varies." },
        { title: "Run one screen for the whole round", body: "Switching between the substantive and reply presets between speeches is faster than resetting by hand, and it keeps every speaker on the same clock." },
      ],
      faqs: [
        { q: "How long are World Schools speeches?", a: "Eight minutes for substantive speeches and four for replies. Some tournaments run seven and three; the presets above cover both." },
        { q: "When can points of information be offered?", a: "Between the end of the first minute and the start of the last in a substantive speech. Reply speeches take no points of information at any point." },
        { q: "What is the difference from British Parliamentary?", a: "BP runs seven-minute speeches with four teams; World Schools runs eight-minute speeches with two teams of three, plus a reply speech given by a speaker who has already spoken." },
        { q: "How much overtime is allowed?", a: "Usually around fifteen seconds of grace before penalties apply, but this is set by each tournament rather than by the format. Check the round's own instructions." },
      ],
    },
    {
      slug: "lincoln-douglas",
      label: "Lincoln-Douglas",
      h1: "Lincoln-Douglas debate timer",
      title: "Lincoln-Douglas Debate Timer — Full LD Speech and Prep Times",
      description:
        "A Lincoln-Douglas debate timer with every speech and cross-examination in order, plus four minutes of prep time per debater.",
      intro:
        "Lincoln-Douglas has seven timed segments in a fixed order plus prep time each side can spend in pieces. The prep clock is the one people lose track of, because it is not spent all at once.",
      answer:
        "A Lincoln-Douglas round runs 6-3-7-3-4-6-3: affirmative constructive, cross-examination, negative constructive, cross-examination, first affirmative rebuttal, negative rebuttal, second affirmative rebuttal. Each debater also has four minutes of prep time to use in pieces across the round, which needs its own running total rather than a fresh timer each time.",
      defaultSeconds: 360,
      presets: [
        { label: "1AC 6 min", seconds: 360, lights: { green: 0, amber: 300, red: 360 }, note: "Affirmative constructive" },
        { label: "Cross-ex 3 min", seconds: 180, lights: { green: 0, amber: 150, red: 180 }, note: "Either cross-examination" },
        { label: "1NC 7 min", seconds: 420, lights: { green: 0, amber: 360, red: 420 }, note: "Negative constructive" },
        { label: "1AR 4 min", seconds: 240, lights: { green: 0, amber: 195, red: 240 }, note: "First affirmative rebuttal" },
        { label: "1NR 6 min", seconds: 360, lights: { green: 0, amber: 300, red: 360 }, note: "Negative rebuttal" },
        { label: "Prep 4 min", seconds: 240, lights: { green: 0, amber: 180, red: 240 }, note: "Whole round's prep, used in pieces" },
      ],
      tips: [
        { title: "Track prep time as a running total", body: "Four minutes spent in four separate chunks is the easiest thing in the round to lose track of. Note what is left after each use rather than restarting the preset each time." },
        { title: "The 1AR is the hardest four minutes in debate", body: "Four minutes to answer seven minutes of negative constructive. Set amber at 3:15 rather than 3:30 — the closing needs longer here than in any other speech." },
        { title: "Cross-examination is timed but not a speech", body: "Three minutes of questioning belongs to neither side's speech time and does not come out of prep. Run it on its own preset so nothing gets double-counted." },
        { title: "Check the circuit's times before the round", body: "6-3-7-3-4-6-3 is standard NSDA, but some circuits and invitationals vary the rebuttals. Confirm rather than assume." },
      ],
      faqs: [
        { q: "What are the Lincoln-Douglas speech times?", a: "6-3-7-3-4-6-3: a six-minute affirmative constructive, three-minute cross-examination, seven-minute negative constructive, three-minute cross-examination, four-minute first affirmative rebuttal, six-minute negative rebuttal and three-minute second affirmative rebuttal." },
        { q: "How much prep time is there in LD?", a: "Four minutes per debater for the whole round, used in whatever pieces they choose. It is not per speech, which is why it needs a running total." },
        { q: "Does cross-examination come out of prep time?", a: "No. Cross-examination is separately timed and belongs to neither debater's speech time nor their prep." },
        { q: "Are LD times the same everywhere?", a: "The NSDA times above are standard, but individual circuits and invitationals sometimes adjust the rebuttals. Check the tournament's own rules before the round." },
      ],
    },
    {
      slug: "model-un",
      label: "Model UN",
      h1: "Model UN timer for caucus and speeches",
      title: "Model UN Timer — Moderated and Unmoderated Caucus Clock",
      description:
        "A Model UN timer for speakers' list speeches, moderated caucus and unmoderated caucus, with the speaking times committees actually use.",
      intro:
        "Model UN has two clocks that behave differently: individual speaking time, which resets for every delegate, and total caucus time, which runs down once. Confusing them is how a chair loses control of a session.",
      answer:
        "A moderated caucus has two numbers — a total duration and a speaking time per delegate — and the chair runs both at once. An unmoderated caucus has only a total. Speakers' list speeches are usually 60 or 90 seconds. Run the per-delegate clock on screen and keep the total yourself, since only the speaking time concerns the room.",
      defaultSeconds: 60,
      presets: [
        { label: "Speech 60 sec", seconds: 60, lights: { green: 0, amber: 45, red: 60 }, note: "Standard speakers' list" },
        { label: "Speech 90 sec", seconds: 90, lights: { green: 0, amber: 70, red: 90 }, note: "Longer general debate" },
        { label: "Mod caucus 30 sec", seconds: 30, lights: { green: 0, amber: 22, red: 30 }, note: "Per delegate, fast exchange" },
        { label: "Mod caucus 45 sec", seconds: 45, lights: { green: 0, amber: 35, red: 45 }, note: "Per delegate, standard" },
        { label: "Unmod 10 min", seconds: 600, note: "Total caucus time" },
        { label: "Unmod 15 min", seconds: 900, note: "Longer bloc negotiation" },
      ],
      tips: [
        { title: "Two clocks, one on screen", body: "Put the per-delegate speaking time on the projector, because that is what the room needs to see. Keep the caucus total yourself — showing both invites delegates to argue about the arithmetic." },
        { title: "Yields come out of the speaker's time", body: "A delegate yielding to questions is still spending their own sixty seconds. Do not reset between the speech and the questions." },
        { title: "Amber does the chair's job for you", body: "Interrupting a delegate to say \"fifteen seconds\" costs the room its attention. A colour change carries the same information and nobody has to stop." },
        { title: "Set the speaking time before you vote on the motion", body: "The motion specifies both numbers. Having the preset ready means the caucus starts when it passes rather than a minute later." },
      ],
      faqs: [
        { q: "How long is a Model UN speech?", a: "Usually 60 or 90 seconds on the speakers' list, and 30 to 45 seconds per delegate in a moderated caucus. Committees set their own, so confirm before the session." },
        { q: "What is the difference between moderated and unmoderated caucus?", a: "A moderated caucus has a total duration and a speaking time per delegate, with the chair recognising each speaker. An unmoderated caucus is one block of time in which delegates talk freely." },
        { q: "Does yielding time restart the clock?", a: "No. A yield to questions or to another delegate comes out of the original speaker's allocation and the clock keeps running." },
        { q: "Can delegates see the timer?", a: "Yes, and they should. Press F for fullscreen and project the speaking time — the screen enforces the limit so the chair does not have to interrupt." },
      ],
    },
  ],
};

export const getTimerVariant = (timer: string, slug: string) =>
  timerVariants[timer]?.find((v) => v.slug === slug);
