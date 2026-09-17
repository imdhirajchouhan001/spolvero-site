// Ad configuration — the single source of truth, committed so that what is in git
// is what deploys. The GitHub Pages build runs without a .env file, so anything
// left only in .env never reaches the live site.
//
// The publisher ID is not a secret: it appears in every page's ad code and in
// public/ads.txt. Slot IDs are not secrets either.
//
// Each value can still be overridden locally through .env for experiments.
//
// Rules this file exists to enforce (the Spolvero ethical-advertising promise):
//   · never above the fold, never between the CTA and the preview
//   · every slot reserves its height so ads cannot shift the layout (CLS)
//   · every slot is lazy-loaded and labelled
//   · the tool must work fully with every ad blocked

const env = import.meta.env;

/** AdSense publisher ID. Kept set so the verification snippet is on every live page. */
export const adsenseClient: string | undefined = (env.PUBLIC_ADSENSE_CLIENT as string) || "ca-pub-5292239751812342";

/** Draw every slot as a labelled box at its real size, without loading AdSense.
 *  For checking placement. Never leave this on for a deploy. */
export const adsPreview = env.PUBLIC_ADS_PREVIEW === "1";

export type Placement = "below-results" | "in-content" | "sidebar";

/** Ad unit IDs from AdSense → Ads → By ad unit, created 17 September 2026.
 *  An empty string disables that unit entirely, which is the switch to use if a
 *  placement ever needs pulling without touching the components. */
const slots = {
  "below-results": (env.PUBLIC_ADSENSE_SLOT_BELOW_RESULTS as string) || "1383146619",
  "in-content": (env.PUBLIC_ADSENSE_SLOT_IN_CONTENT as string) || "3755738098",
  sidebar: (env.PUBLIC_ADSENSE_SLOT_SIDEBAR as string) || "7567437704",
  anchor: (env.PUBLIC_ADSENSE_SLOT_ANCHOR as string) || "1129574752",
  interstitial: (env.PUBLIC_ADSENSE_SLOT_INTERSTITIAL as string) || "4298663576",
};

/** Reserved box per placement, matched to the unit sizes AdSense will fill. */
export const placements: Record<Placement, { minHeight: string; mdMinHeight: string; label: string; hideBelow?: string }> = {
  // Under the score panel — the first ad a visitor can meet, and only after the verdict.
  "below-results": { minHeight: "250px", mdMinHeight: "90px", label: "Advertisement" },
  // Between "How to use" and the tips.
  "in-content": { minHeight: "250px", mdMinHeight: "280px", label: "Advertisement" },
  // Right rail beside the FAQ, never beside the tool. Desktop only.
  sidebar: { minHeight: "0px", mdMinHeight: "600px", label: "Advertisement", hideBelow: "xl" },
};

export const slotId = (p: Placement) => slots[p] || undefined;

/** Max display units per page, per the plan. Pages are built to stay under it. */
export const maxUnitsPerPage = 3;

/* ---------------------------------------------------------------------------
   Interrupting formats. Both are capped at once per browsing session, and
   neither renders until its ad unit above is filled in.

   anchor       A dismissible strip pinned to the bottom of the screen. Covers
                nothing, costs no ranking, and is the format the launch plan
                lists for month 3.
   interstitial A full-screen panel the reader has to close. Google treats an
                interstitial that covers content shortly after a search click
                as an intrusive interstitial and demotes the page on mobile.
                It fires only after real engagement (interstitialAfterSections)
                and never while a test result is on screen.
   --------------------------------------------------------------------------- */
export const adsAnchor = env.PUBLIC_ADS_ANCHOR ? env.PUBLIC_ADS_ANCHOR === "1" : true;
export const adsInterstitial = env.PUBLIC_ADS_INTERSTITIAL ? env.PUBLIC_ADS_INTERSTITIAL === "1" : true;

/** How many page sections must scroll past before the interstitial may appear. */
export const interstitialAfterSections = Number(env.PUBLIC_ADS_INTERSTITIAL_AFTER ?? 6);

/** Seconds on the page before the anchor strip slides up. */
export const anchorDelaySeconds = Number(env.PUBLIC_ADS_ANCHOR_DELAY ?? 10);

export const interruptSlots = {
  anchor: slots.anchor || undefined,
  interstitial: slots.interstitial || undefined,
};
