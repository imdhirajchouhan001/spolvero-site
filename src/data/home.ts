// Homepage sections that are not derived from the products, tools or timers.
//
// Spolvero is an umbrella: it makes its own apps, publishes free web tools, and
// takes design work for other people. The homepage has to say all three plainly,
// because a visitor arriving from any one of them needs to see the other two.

export type Pillar = {
  title: string;
  kind: string;
  body: string;
  icon: string;
  tint: string;
  /** The saturated form of the tint, darkened per tile for the glyph. */
  accent: string;
  href: string;
  cta: string;
  /** Short, true proof line. Never a claim the site cannot back up. */
  proof: string;
};

export const pillars: Pillar[] = [
  {
    kind: "Products",
    title: "Apps we make",
    body:
      "Small Android apps that each do one job and ask for as little as possible. No bank logins, no gallery access, and no account needed to start.",
    icon: "phone",
    tint: "#ffeadb",
    accent: "#ff7e1d",
    href: "/apps/",
    cta: "See the apps",
    proof: "Unspend is live on Google Play",
  },
  {
    kind: "Free tools",
    title: "Tools anyone can use",
    body:
      "Browser tools that solve one problem and then get out of the way — device tests, timers built to be projected, and a voice recorder. No sign-up, nothing uploaded.",
    icon: "wrench",
    tint: "#e2f0ff",
    accent: "#2e9bff",
    href: "/tools/",
    cta: "Open the tools",
    proof: "Twelve tools live, free forever",
  },
  {
    kind: "Services",
    title: "Design for your product",
    body:
      "The same design work that goes into our own apps, for yours. Flows, screens, prototypes and a design system your developers can build from.",
    icon: "pen",
    tint: "#dff5ea",
    accent: "#23b26d",
    href: "/studio/",
    cta: "Work with us",
    proof: "$20–30 an hour, worldwide",
  },
];

/** The three promises every app makes. Shown on /about/, and on each app page
 *  only where the app actually keeps them. */
export const principles = [
  { icon: "lock", title: "Private by default", body: "Your data stays on your phone. No bank logins, no gallery access, no account needed to start." },
  { icon: "eyeoff", title: "Ads that know their place", body: "Free apps may show ads, but nothing you type or track in our apps is ever shared with an ad network." },
  { icon: "quote", title: "Numbers you can check", body: "Every figure shows where it came from, and our apps say plainly what they can't prove." },
];

/** Every "Spolvero way" line must stay true for all apps in src/data/products.ts. */
export const comparison = [
  { old: "Asks for your bank login, whole photo gallery or an account first", ours: "Asks only for what the job needs, and you can start without an account" },
  { old: "Sends what you enter to its own servers", ours: "Keeps what you enter on your phone by default" },
  { old: "Uses what you do in the app to target ads", ours: "Ads never see what you put into the app" },
  { old: "Gives you numbers with no explanation", ours: "Shows where its numbers come from" },
  { old: "Puts the main feature behind a paywall", ours: "The main job is free; upgrades are optional" },
];

/** Only numbers the site itself proves. Update these when the counts change. */
export const stats = [
  { value: "5", label: "apps designed and built", note: "One live, four in progress" },
  { value: "58", label: "free tool pages", note: "Device tests, timers and the recorder" },
  { value: "16", label: "guides published", note: "Written to answer, not to fill" },
  { value: "0", label: "trackers in our apps", note: "Nothing sold, nothing shared" },
];

/**
 * Real testimonials only.
 *
 * This is deliberately empty. The section renders nothing while it is, and will
 * appear the moment a genuine quote is added. Inventing names and quotes would
 * mislead readers, and fabricated endorsements are exactly what an ad network's
 * site review looks for — so the slot stays empty rather than filled with fiction.
 *
 * To add one: quote, the person's name, what they do, and — if it came from a
 * public place such as a Play Store review — a link to it.
 */
export type Testimonial = { quote: string; name: string; role: string; source?: string };
export const testimonials: Testimonial[] = [];

/** About Spolvero rather than about the studio service. Feeds FAQPage schema. */
export const companyFaqs = [
  {
    q: "What is Spolvero?",
    a: "An independent design and software studio. We design and build our own apps and free web tools, and we take on design work for other people's products. The three feed each other: what we learn shipping our own apps is what we bring to client work.",
  },
  {
    q: "Are the tools really free?",
    a: "Yes, and they stay free. The web tools are paid for by ads on the pages around them, never by charging for the tool itself. There is no sign-up, no trial, and no feature held back behind a payment.",
  },
  {
    q: "How do you make money?",
    a: "Three ways: design work for clients, ads on the free web tools, and optional paid upgrades inside our apps. We never sell data, and the ad networks we use never see what you type into an app or a tool.",
  },
  {
    q: "Why do your apps ask for so few permissions?",
    a: "Because most apps ask for far more than the job needs, and once data leaves your device you cannot take it back. Our subscription tracker has no bank connection at all, and our webcam test never uploads a frame of video.",
  },
  {
    q: "Where are you based?",
    a: "We work from India with clients worldwide, over email and video calls. Time zones have not been a problem — most of the work is asynchronous, with calls at whatever hour suits you.",
  },
  {
    q: "Can I suggest a tool or an app?",
    a: "Please do. A good share of what is on the roadmap started as somebody describing a problem they kept having. Send it through the contact page and tell us what you are actually trying to do.",
  },
];
