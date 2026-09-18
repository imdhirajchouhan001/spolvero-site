// Structured data for every timer page: the tool, the steps, and the FAQ.
import { howToSteps, type Faq } from "@/data/timers";

export const timerJsonLd = (opts: {
  url: string; name: string; description: string; faqs: Faq[]; site: string; crumb: string;
  /** Set on a variant page, so the head timer keeps its place in the trail. */
  parent?: { name: string; url: string };
}) => [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: opts.site },
      { "@type": "ListItem", position: 2, name: "Tools", item: new URL("/tools/", opts.site).toString() },
      { "@type": "ListItem", position: 3, name: "Timers", item: new URL("/tools/timers/", opts.site).toString() },
      ...(opts.parent
        ? [
            { "@type": "ListItem", position: 4, name: opts.parent.name, item: opts.parent.url },
            { "@type": "ListItem", position: 5, name: opts.crumb, item: opts.url },
          ]
        : [{ "@type": "ListItem", position: 4, name: opts.crumb, item: opts.url }]),
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Timer",
    operatingSystem: "Web browser: Chrome, Safari, Firefox, Edge",
    url: opts.url,
    description: opts.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Spolvero", url: opts.site },
    isAccessibleForFree: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to run a timer on a projector or smartboard",
    totalTime: "PT1M",
    step: howToSteps.map((s, i) => ({
      "@type": "HowToStep", position: i + 1, name: s.name, text: s.text, url: `${opts.url}#step-${i + 1}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((f) => ({
      "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];
