// Structured data for every webcam page: the tool itself, the steps, and the FAQ.
// One helper so the head page and every variant stay consistent.
import { howToSteps, type Faq } from "@/data/tools";

export const webcamJsonLd = (opts: {
  url: string;
  name: string;
  description: string;
  faqs: Faq[];
  site: string;
  /** Present on a variant page; the head page leaves it out. */
  crumb?: string;
}) => [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: opts.site },
      { "@type": "ListItem", position: 2, name: "Tools", item: new URL("/tools/", opts.site).toString() },
      { "@type": "ListItem", position: 3, name: "Webcam test", item: new URL("/tools/webcam-test/", opts.site).toString() },
      ...(opts.crumb ? [{ "@type": "ListItem", position: 4, name: opts.crumb, item: opts.url }] : []),
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Webcam test",
    operatingSystem: "Web browser: Chrome, Safari, Firefox, Edge",
    browserRequirements: "Requires a browser with getUserMedia support and camera permission",
    url: opts.url,
    description: opts.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Spolvero", url: opts.site },
    isAccessibleForFree: true,
    permissions: "camera",
    privacyPolicy: new URL("/privacy/", opts.site).toString(),
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to test your webcam in a browser",
    totalTime: "PT1M",
    tool: [{ "@type": "HowToTool", name: "A web browser with camera access" }],
    step: howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${opts.url}#step-${i + 1}`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];
