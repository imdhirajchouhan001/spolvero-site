// One source for the main navigation, the mobile menu and the SiteNavigationElement schema.
import { products } from "@/data/products";
import { tools } from "@/data/tools";

export type NavItem = { label: string; href: string; note?: string; status?: "live" | "soon" };

export type NavGroup = {
  label: string;
  /** Where the group name itself points, and what the schema lists as the section URL. */
  href: string;
  blurb: string;
  items: NavItem[];
  /** Shown at the foot of the dropdown. */
  footer?: NavItem;
};

const appItems: NavItem[] = products.map((p) => ({
  label: p.name,
  href: `/${p.slug}/`,
  note: p.kind,
  status: p.status === "live" ? "live" : "soon",
}));

const toolItems: NavItem[] = tools.map((t) => ({
  label: t.name,
  href: t.status === "live" ? `/tools/${t.slug}/` : "/tools/",
  note: t.kind,
  status: t.status,
}));

export const navGroups: NavGroup[] = [
  {
    label: "Apps",
    href: "/#apps",
    blurb: "Small Android apps, each doing one job.",
    items: appItems,
    footer: { label: "See all apps", href: "/#apps" },
  },
  {
    label: "Games",
    href: "/#next",
    blurb: "2D games first, 3D later. Nothing to play yet.",
    items: [{ label: "In design", href: "/#next", note: "Follow along on the drawing board", status: "soon" }],
    footer: { label: "What we're sketching", href: "/#next" },
  },
  {
    label: "Tools",
    href: "/tools/",
    blurb: "Browser tests for your camera, mic, speakers and screen.",
    items: toolItems,
    footer: { label: "All device tests", href: "/tools/" },
  },
];

/** Flat links that sit beside the dropdowns. */
export const navLinks: NavItem[] = [
  { label: "Articles", href: "/articles/" },
  { label: "Design studio", href: "/#studio" },
  { label: "Contact", href: "/contact/" },
];
