// Every product page and card is generated from this file.
// Copy rules: only claims the app's own repo backs up (store listing docs, claims registers).
// To take an app live: set status to "live" and fill playUrl.

export type Status = "live" | "soon";

export type Screenshot = { src: string; alt: string; caption: string };

export type Feature = { title: string; body: string; icon: string };

export type Product = {
  slug: string;
  name: string;
  storeName: string;
  kind: string;
  status: Status;
  platform: string;
  tagline: string;
  summary: string;
  accent: string;
  tint: string;
  icon?: string;
  monogram?: string;
  playUrl?: string;
  /** Screenshots already include a device frame or store artwork. */
  framed: boolean;
  screenshots: Screenshot[];
  features: Feature[];
  promise: { title: string; body: string; points: string[] };
  pricing?: { free: string[]; pro: string[]; proNote: string };
  faqs: { q: string; a: string }[];
  policy?: string;
  disclaimer?: string;
};

export const products: Product[] = [
  {
    slug: "unspend",
    name: "Unspend",
    storeName: "Unspend: Subscription Tracker",
    kind: "Subscription tracker",
    status: "live",
    platform: "Android",
    tagline: "Know what you pay before it's paid.",
    summary:
      "See every subscription in one private list, get warned before each renewal, and split shared plans with your household. No bank login.",
    accent: "#0043ce",
    tint: "#e8eeff",
    icon: "/products/unspend/icon.webp",
    playUrl: "https://play.google.com/store/apps/details?id=design.spolvero.unspend",
    framed: true,
    screenshots: [
      { src: "/products/unspend/01.webp", alt: "Home screen showing a monthly spend of 8,450 rupees and upcoming renewals", caption: "Your real monthly total" },
      { src: "/products/unspend/02.webp", alt: "Insights screen with a donut chart of spending by category", caption: "Where the money goes" },
      { src: "/products/unspend/03.webp", alt: "Add subscription screen listing Netflix, Amazon Prime and other services with prices", caption: "Common services, ready to add" },
      { src: "/products/unspend/04.webp", alt: "Lock screen notification: Netflix renews in 7 days", caption: "A heads-up before the charge" },
      { src: "/products/unspend/05.webp", alt: "People screen showing who owes what for shared subscriptions", caption: "Who pays what" },
    ],
    features: [
      { icon: "wallet", title: "See what you actually pay", body: "Real monthly and yearly totals, with breakdowns by category, by person, and by rolling versus locked-in spending." },
      { icon: "bell", title: "Never get charged by surprise", body: "Renewal reminders days before the money moves, and separate free-trial alerts so a trial never quietly becomes a bill." },
      { icon: "zap", title: "Add one in about 20 seconds", body: "Pick from a catalogue of common services with price and billing cycle filled in, or add anything custom. Monthly or yearly billing." },
      { icon: "users", title: "Built for households", body: "With Pro, assign who pays, split shared plans evenly, see each person's share and mark balances settled." },
    ],
    promise: {
      title: "Private by design, not as a setting",
      body: "Most subscription apps find your subscriptions by reading every bank transaction you've ever made. Unspend doesn't.",
      points: [
        "No bank or card connection, ever",
        "No sign-up needed to start",
        "Your subscriptions are stored on your phone",
        "No analytics or trackers, and your data is never sold",
        "Ads are never personalised and never see your list",
        "Back up to a file you keep",
      ],
    },
    pricing: {
      free: ["Unlimited subscriptions", "Monthly and yearly totals", "Renewal and free-trial reminders", "Backup to a file", "Occasional ads"],
      pro: ["No ads", "Splitting and settle-up", "Share the list with family", "Requires signing in"],
      proNote: "See the price for your country in the app",
    },
    faqs: [
      { q: "Does Unspend connect to my bank?", a: "No. Unspend never asks for bank details, card numbers or banking logins, and it can't move money. You add subscriptions yourself, which takes about 20 seconds each." },
      { q: "Do I need an account?", a: "No. Open the app and start adding subscriptions. Signing in with your email is optional, and needed for Pro." },
      { q: "Where is my data stored?", a: "On your phone, in storage only Unspend can read. Your subscriptions are never uploaded to us. If you sign in, your email address and name are stored with our sign-in provider, plus your household membership if you share with family." },
      { q: "Will Unspend cancel subscriptions for me?", a: "No. Unspend tracks and reminds. It never cancels or pays anything on your behalf." },
      { q: "Which billing cycles are supported?", a: "Monthly and yearly." },
      { q: "Does it convert between currencies?", a: "Not yet. Each subscription keeps the currency it's billed in, and totals add the amounts as entered. For the clearest total, track everything in one currency." },
      { q: "How do I move to a new phone?", a: "Export a backup file from Settings, then restore it on your new phone. The file is yours. Unspend never keeps a copy." },
      { q: "How do I delete my account?", a: "From inside the app, or email spolvero.design@gmail.com from the address on your account. Account data is removed within 30 days." },
    ],
    policy: "unspend",
  },
  {
    slug: "exact",
    name: "Exact",
    storeName: "Exact",
    kind: "Photo compressor",
    status: "soon",
    platform: "Android",
    tagline: "Hit your exact file size.",
    summary:
      "Name a size, like 50 KB, 100 KB or 1 MB, and get a photo under it. See the quality before you save, and never sit through an ad before your first result.",
    accent: "#0868f8",
    tint: "#e7f0ff",
    icon: "/products/exact/icon.webp",
    framed: true,
    screenshots: [
      { src: "/products/exact/01.webp", alt: "Compress screen with size targets of 50 KB, 100 KB, 200 KB, 500 KB and 1 MB", caption: "Name a size" },
      { src: "/products/exact/02.webp", alt: "Preview comparing the original 761 KB photo with the 33 KB result using a split slider", caption: "See the damage before you save" },
      { src: "/products/exact/03.webp", alt: "Batch of nine photos ready to compress under one size limit", caption: "Do the whole set at once" },
      { src: "/products/exact/04.webp", alt: "Dark mode preview for judging compression against black", caption: "Judged against black, too" },
    ],
    features: [
      { icon: "target", title: "Name a size, get a file under it", body: "Pick the limit the form demands. Exact aims just under it and counts the bytes before saying it's done." },
      { icon: "split", title: "See the damage before you save", body: "Drag the split to compare original and result at full zoom. If a busy photo will look softer, Exact tells you first." },
      { icon: "layers", title: "Do the whole set at once", body: "Compress a batch in one go, with every photo in view so you know what you picked." },
      { icon: "shield", title: "Your originals are safe", body: "The original is never touched by default, and Exact only sees the photos you choose, not your whole gallery." },
    ],
    promise: {
      title: "Five seconds of work shouldn't cost a minute of ads",
      body: "Most compressors make you watch ads for a task that takes seconds. Exact was built the other way round.",
      points: [
        "No ad before your first result, ever",
        "Exact-size targeting is free forever",
        "Never hands back a bigger file",
        "Can't see your gallery, only the photos you pick",
      ],
    },
    faqs: [
      { q: "Does it really hit the size I ask for?", a: "Exact aims just under your limit and measures the finished file before it reports success." },
      { q: "Will my original photo be changed?", a: "Not by default. Exact writes the new file and leaves your original alone." },
      { q: "Is it free?", a: "The core job, getting a photo under a size, is free forever. Extras come with a one-time unlock, not a subscription." },
      { q: "When is it out?", a: "Soon on Google Play. Join the launch list and we'll email you when it's ready." },
    ],
  },
  {
    slug: "enough",
    name: "Enough",
    storeName: "Enough",
    kind: "Water tracker",
    status: "soon",
    platform: "Android",
    tagline: "The only water app that asks for less.",
    summary:
      "A daily drinking target you can trace to its source, reminders that fit your waking hours, and a history that tells you the truth.",
    accent: "#1858d8",
    tint: "#e4f1ff",
    icon: "/products/enough/icon.webp",
    framed: false,
    screenshots: [
      { src: "/products/enough/01.webp", alt: "Explainer showing how a 1.50 litre drink target is worked out from EFSA figures", caption: "Where your number comes from" },
      { src: "/products/enough/02.webp", alt: "Onboarding: your drinking target is 1.50 L a day", caption: "A target lower than most apps" },
      { src: "/products/enough/03.webp", alt: "The sources behind the target: EFSA, IOM and food moisture", caption: "Every source, named" },
      { src: "/products/enough/04.webp", alt: "Weekly history chart showing days goal met and below goal", caption: "An honest history" },
      { src: "/products/enough/05.webp", alt: "Reminder setup asking for wake and sleep times", caption: "Reminders while you're awake" },
    ],
    features: [
      { icon: "book", title: "A number with a source", body: "Your target is worked out from published standards (EFSA, US IOM and ICMR-NIN) and every step is shown on screen." },
      { icon: "utensils", title: "Food counts", body: "About a quarter of your water comes from food, so Enough takes it off. Your number is lower than most apps', and it tells you why." },
      { icon: "clock", title: "Reminders that fit your day", body: "Reminders arrive only inside your waking hours, and Enough watches whether your phone is quietly blocking them." },
      { icon: "chart", title: "A history that tells the truth", body: "See which days you met your goal, fell short, or logged late, week by week." },
    ],
    promise: {
      title: "Enough is a number, not a nag",
      body: "Other water apps push you to drink more. Enough is built around an upper bound you can check.",
      points: [
        "Every number shows its source",
        "Your hydration data never reaches the ad system",
        "Location is only used if you turn on the weather forecast",
        "Not a medical device, and it says so",
      ],
    },
    faqs: [
      { q: "Why is my target lower than other apps?", a: "Published guidance counts water from all sources, including food. Enough subtracts the share that comes from food, so what's left is what you actually need to drink." },
      { q: "Which standard does it use?", a: "You can choose EFSA (2010), US IOM, or ICMR-NIN. India defaults to ICMR-NIN." },
      { q: "Is it medical advice?", a: "No. Enough is not a medical device. Talk to a doctor about your own needs." },
      { q: "When is it out?", a: "Soon on Google Play. Join the launch list and we'll email you when it's ready." },
    ],
  },
  {
    slug: "baseline",
    name: "Baseline",
    storeName: "Baseline",
    kind: "Skincare progress",
    status: "soon",
    platform: "Android",
    tagline: "Find out whether your skincare is working.",
    summary:
      "Log what you use, take photos that are actually comparable, and see what changed, week by week. Honest about what it can't prove.",
    accent: "#6d4aff",
    tint: "#f0ebff",
    monogram: "B",
    framed: false,
    screenshots: [
      { src: "/products/baseline/01.webp", alt: "Today screen with a ready read, a streak and today's photo slot", caption: "Your day at a glance" },
      { src: "/products/baseline/02.webp", alt: "Compare screen with a before and after slider", caption: "Compare with a slider" },
      { src: "/products/baseline/03.webp", alt: "Your first read after 8 weeks, with photo counts and what the photos show", caption: "The eight-week read" },
      { src: "/products/baseline/04.webp", alt: "Shelf with morning and evening routines", caption: "Routines and products" },
      { src: "/products/baseline/05.webp", alt: "Diary check-in with tags like flare, period, travel and stress", caption: "Note what else changed" },
      { src: "/products/baseline/06.webp", alt: "Welcome screen: find out whether your skincare is working", caption: "Start in a minute" },
    ],
    features: [
      { icon: "camera", title: "Photos that are actually comparable", body: "Guide lines line every photo up with your first one. If the light is wrong, Baseline says so instead of guessing." },
      { icon: "split", title: "Compare any two days", body: "Side by side or with a slider, so real change is easy to see." },
      { icon: "chart", title: "The eight-week read", body: "A plain summary of what your photos show, with the method next to every number." },
      { icon: "notebook", title: "A change log and diary", body: "Record new products, flares, travel or poor sleep, so you know what else might explain a change." },
    ],
    promise: {
      title: "A measuring tool, not a diagnosis",
      body: "Baseline tells you what changed and names what else might explain it. It never pretends to be a dermatologist.",
      points: [
        "Photos stay on your phone, backed up to your own Drive",
        "Skin data never reaches the ad system",
        "It never ranks a product you haven't already bought",
        "One tap to see everything it holds, one tap to delete it",
      ],
    },
    faqs: [
      { q: "Does Baseline diagnose skin conditions?", a: "No. It measures and records. For medical questions, see a dermatologist." },
      { q: "Where are my photos stored?", a: "On your phone, and backed up to your own Google Drive if you choose." },
      { q: "What if I miss a week?", a: "That's normal. The streak is forgiving, and nothing is lost when it ends." },
      { q: "When is it out?", a: "Soon. Join the launch list and we'll email you when it's ready." },
    ],
  },
  {
    slug: "astro",
    name: "Astro",
    storeName: "Astro",
    kind: "Astrology",
    status: "soon",
    platform: "Android",
    tagline: "The astrology app that shows its working.",
    summary:
      "Your real chart, calculated on your phone and read in 64 traditions. Every answer names its source.",
    accent: "#b7791f",
    tint: "#fbf3e3",
    monogram: "A",
    framed: false,
    screenshots: [
      { src: "/products/astro/01.webp", alt: "Today screen with a daily reading and a link to why", caption: "A daily reading, with reasons" },
      { src: "/products/astro/02.webp", alt: "Ask screen answering a question and asking one back", caption: "Ask in your own words" },
      { src: "/products/astro/03.webp", alt: "Chart screen showing Sun, Moon and Rising signs and a chart wheel", caption: "Your chart, calculated properly" },
      { src: "/products/astro/04.webp", alt: "A horary reading with a button to see the reasoning", caption: "See the reasoning" },
      { src: "/products/astro/05.webp", alt: "Learn screen with lessons on houses, nakshatras and aspects", caption: "Learn to read your own chart" },
    ],
    features: [
      { icon: "orbit", title: "Your chart, calculated properly", body: "Planetary positions are computed on your phone with standard astronomical methods, checked against real equinoxes and solstices." },
      { icon: "globe", title: "Sixty-four traditions", body: "Vedic and Western, plus Chinese, Japanese Kyusei Kigaku, Korean Saju, Burmese Mahabote and more, all from one birth moment." },
      { icon: "message", title: "Ask in your own words", body: "Hindi, Hinglish, English, Japanese or Korean. Like a real astrologer, it may ask you a question back before it reads." },
      { icon: "quote", title: "Every answer shows its source", body: "Readings are drawn from classical texts and cite where they come from. Health, money and legal questions are refused, not guessed." },
    ],
    promise: {
      title: "Nothing leaves your phone",
      body: "No account and no sign-up. Your birth details, chart and readings are computed and stored on your device.",
      points: [
        "No account needed",
        "Export or delete everything in two taps",
        "Full chart, unlimited questions and all 64 traditions are free",
        "Pro adds the forward look: timing, compatibility and favourable days",
      ],
    },
    faqs: [
      { q: "Is the reading written by an AI?", a: "Positions and rules come from astronomy and classical texts encoded as code. Interpretations are AI-assisted from those sources, and each one cites where it comes from." },
      { q: "What won't it answer?", a: "Health, money and legal questions, elections and markets. Those are refused rather than guessed." },
      { q: "Is it free?", a: "Your full chart, unlimited questions, all 64 traditions and the lessons are free. Pro adds timing, full compatibility and favourable days." },
      { q: "When is it out?", a: "Soon on Google Play. Join the launch list and we'll email you when it's ready." },
    ],
    disclaimer: "For guidance and reflection. Readings are drawn from classical texts, and interpretations are AI-assisted from those sources.",
  },
  {
    slug: "gst-calculator",
    name: "GST Calculator",
    storeName: "GST Calculator by Spolvero",
    kind: "GST calculator",
    status: "soon",
    platform: "Android",
    tagline: "The GST number you need, in one glance.",
    summary:
      "Add or remove GST, split CGST and SGST or IGST correctly, and look up any HSN or SAC rate. One small ad, and never between you and your number.",
    accent: "#e8710a",
    tint: "#fff1e4",
    icon: "/products/gst/icon.webp",
    framed: false,
    screenshots: [],
    features: [
      { icon: "calculator", title: "Add or remove GST", body: "Add GST to a price or pull it back out of a total. Splits CGST and SGST within a state, IGST across state lines." },
      { icon: "percent", title: "Every current slab", body: "0%, 5%, 18% and 40%, plus 3%, 0.25% and the composition rates, with four rate keys you set once." },
      { icon: "search", title: "Look up any rate", body: "Find a product by name or HSN/SAC code and apply its rate. The app shows the date its rates came from." },
      { icon: "history", title: "Memory and history", body: "Memory keys, markup, a running bill for multi-item totals, and your last 25 calculations." },
    ],
    promise: {
      title: "Type an amount. Tap a rate. Read the answer.",
      body: "That's the whole app. No account, no permissions, and no waiting on a network.",
      points: [
        "Your calculations never leave your phone",
        "One banner ad below the keypad, no full-screen ads",
        "Pro is one payment, not a subscription",
        "Rates reproduced from official GST notifications",
      ],
    },
    faqs: [
      { q: "Is this a government app?", a: "No. It's an independent app, not affiliated with, endorsed by, or representing the Government of India, the GST Council, or CBIC." },
      { q: "Are the rates current?", a: "The app carries the GST 2.0 structure from September 2025 and shows the date its rates came from. Always confirm a rate at the official source before it goes on an invoice." },
      { q: "Does it file returns?", a: "No. It calculates and informs. It doesn't file returns or provide any government service." },
      { q: "When is it out?", a: "Soon on Google Play. Join the launch list and we'll email you when it's ready." },
    ],
    policy: "gst",
    disclaimer:
      "GST Calculator is an independent app. It is not affiliated with, endorsed by, or representing the Government of India, the GST Council, or the Central Board of Indirect Taxes and Customs. Official rate sources: cbic-gst.gov.in and gstcouncil.gov.in.",
  },
];

export const categories = [
  { title: "Games", body: "2D games first, 3D later.", icon: "gamepad" },
  { title: "Software", body: "Online tools for small teams and solo businesses.", icon: "monitor" },
  { title: "Web tools", body: "Free tools that run in your browser.", icon: "wrench" },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
