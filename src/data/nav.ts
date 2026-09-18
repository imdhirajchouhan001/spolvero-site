// One source for the main menu, the mobile menu and the SiteNavigationElement schema.
//
// The menu is built to survive growth. Listing every tool worked at eleven and
// would be unusable at fifty, so the rule here is **two levels, never three**:
// a category, then a handful of tools worth surfacing directly. Everything else
// lives on that category's hub page, which is one click away and is also the page
// we want to rank. Long-tail variants — /tools/webcam-test/zoom and friends —
// never appear in the menu at all; they are reached from their parent tool.
import { products } from "@/data/products";
import { tools } from "@/data/tools";
import { timers } from "@/data/timers";

export type NavItem = { label: string; href: string; note?: string; status?: "live" | "soon" };

/** A section of the tools menu. */
export type NavCategory = {
  label: string;
  href: string;
  blurb: string;
  /** How many tools the category holds, shown so the menu hints at depth. */
  count: number;
  /** The few shown in the menu. The hub has the rest. */
  featured: NavItem[];
};

export type NavGroup = {
  label: string;
  href: string;
  blurb: string;
  /** A flat group, used where the list is small enough to show whole. */
  items?: NavItem[];
  /** A grouped one, used where it is not. */
  categories?: NavCategory[];
  footer?: NavItem;
};

/** How many of each category to name in the menu before deferring to the hub. */
const FEATURED = 4;

const item = (label: string, href: string, note: string, status: "live" | "soon"): NavItem => ({ label, href, note, status });

const appItems = products.map((p) => item(p.name, `/${p.slug}/`, p.kind, p.status === "live" ? "live" : "soon"));

// Live tools first, so the menu leads with what a visitor can actually use.
const byStatus = <T extends { status: string }>(a: T, b: T) => (a.status === b.status ? 0 : a.status === "live" ? -1 : 1);

const deviceTests = [...tools]
  .filter((t) => t.slug !== "voice-recorder")
  .sort(byStatus)
  .map((t) => item(t.name, t.status === "live" ? `/tools/${t.slug}/` : "/tools/", t.kind, t.status));

const timerItems = [...timers]
  .sort(byStatus)
  .map((t) => item(t.name, t.status === "live" ? `/tools/timers/${t.slug}/` : "/tools/timers/", t.kind, t.status));

const audioItems = [
  item("Voice Recorder", "/tools/voice-recorder/", "Record and export", "live"),
];

const toolCategories: NavCategory[] = [
  {
    label: "Device tests",
    href: "/tools/",
    blurb: "Check your camera, mic, speakers, keyboard and screen.",
    count: deviceTests.length,
    featured: deviceTests.slice(0, FEATURED),
  },
  {
    label: "Timers",
    href: "/tools/timers/",
    blurb: "Big, calm timers for classrooms, speeches and workouts.",
    count: timerItems.length,
    featured: timerItems.slice(0, FEATURED),
  },
  {
    label: "Audio",
    href: "/tools/voice-recorder/",
    blurb: "Record and export without uploading anything.",
    count: audioItems.length,
    featured: audioItems,
  },
];

export const navGroups: NavGroup[] = [
  {
    label: "Tools",
    href: "/tools/",
    blurb: "Free browser tools. Nothing to install, nothing uploaded.",
    categories: toolCategories,
    footer: { label: "All tools", href: "/tools/" },
  },
  {
    label: "Apps",
    href: "/#apps",
    blurb: "Small apps for Android and iOS, each doing one job.",
    items: appItems,
    footer: { label: "See all apps", href: "/#apps" },
  },
  {
    label: "Games",
    href: "/#next",
    blurb: "2D games first, 3D later. Nothing to play yet.",
    items: [item("In design", "/#next", "Follow along on the drawing board", "soon")],
    footer: { label: "What we're sketching", href: "/#next" },
  },
];

/** Flat links that sit beside the groups. */
export const navLinks: NavItem[] = [
  { label: "Guides", href: "/articles/" },
  { label: "Design studio", href: "/#studio" },
  { label: "Contact", href: "/contact/" },
];

/** Every tool, for the hub pages and the sitemap-shaped listings. */
export const allToolCount = deviceTests.length + timerItems.length + audioItems.length;
