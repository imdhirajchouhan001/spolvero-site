// The design-studio offer, in one place.
//
// This used to live inline in the homepage, which is why the homepage ended up
// doing five jobs at once. The studio now has its own page at /studio/ and this
// file is the single source both it and any teaser elsewhere read from.

export const services = [
  "UI and UX for iOS and Android apps",
  "Flows, prototypes and design systems",
  "Landing pages and product websites",
  "Name, logo, colour and type",
  "Store listings and screenshots",
];

/** First call to launch. Rendered as numbered rows, and kept to three on purpose. */
export const steps = [
  { title: "Discover", body: "A call about your product, users and goals. You get a written scope and quote before any work starts." },
  { title: "Design", body: "Flows, screens and a clickable prototype, reviewed with you as we go, plus a design system to keep it consistent." },
  { title: "Hand off and launch", body: "Developer-ready Figma files and assets, plus store screenshots and listing copy if you need them." },
];

/** Questions clients ask before hiring. Feeds FAQPage schema on /studio/. */
export const studioFaqs = [
  { q: "How much does a project cost?", a: "We charge $20–30 an hour depending on scope. You get a written quote with an estimate of hours before anything starts, so there are no surprises." },
  { q: "How long does a project take?", a: "It depends on the size of the product. We agree a timeline in the quote and keep you updated as we go." },
  { q: "What do I get at the end?", a: "Figma files with every screen and state, a clickable prototype, a component library or design system, and exported assets ready for your developers." },
  { q: "Who owns the designs?", a: "You do. Once the project is paid, the final designs are yours to use however you like." },
  { q: "Will you sign an NDA?", a: "Yes. Send it over with your first message and we'll sign it before you share any details." },
  { q: "Do you work with clients outside India?", a: "Yes. We work with founders and teams anywhere in the world, over email and video calls." },
  { q: "Can you also design my website or brand?", a: "Yes. Along with app design we do landing pages, product websites, and naming, logo, colour and type." },
];
