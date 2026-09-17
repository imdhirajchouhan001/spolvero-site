// Every timer page, hub card and preset is generated from this file.
//
// Copy rules: only timings a published source backs up. The Toastmasters and exam
// tables below are the reason these pages exist rather than being one timer with
// different headings, so they have to be right.

export type TimerStatus = "live" | "soon";

/** The three engine modes. Each page picks one. */
export type TimerMode = "countdown" | "speech" | "exam";

export type Preset = {
  label: string;
  /** Total seconds. */
  seconds: number;
  /** Speech mode only: seconds at which each light turns on. */
  lights?: { green: number; amber: number; red: number };
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
      title: "Classroom Timer — Big Visual Countdown, Free",
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
      title: "Toastmasters Speech Timer — Timing Lights",
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
      title: "Exam Clock — Projected Timer With Finish Time",
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
    status: "soon",
    mode: "countdown",
    icon: "zap",
    accent: "#ff6fa3",
    tint: "#ffe6ef",
    tagline: "Work, rest, repeat — on the gym TV.",
    summary: "Rounds of work and rest with loud cues and big colour changes, for HIIT, EMOM and circuits.",
  },
  {
    slug: "tabata-timer",
    name: "Tabata Timer",
    kind: "20/10 intervals",
    status: "soon",
    mode: "countdown",
    icon: "target",
    accent: "#ffc83d",
    tint: "#fff4d9",
    tagline: "Eight rounds, twenty on, ten off.",
    summary: "The standard Tabata protocol ready to go, with a countdown into the first round.",
  },
  {
    slug: "debate-timer",
    name: "Debate Timer",
    kind: "Format presets",
    status: "soon",
    mode: "speech",
    icon: "users",
    accent: "#4a4ac0",
    tint: "#eeeefb",
    tagline: "British Parliamentary, LD, Worlds.",
    summary: "Speech times and protected periods for each debating format, without setting them up by hand.",
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
