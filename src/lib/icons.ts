// The icon set: Icons8 Material Sharp, drawn as CSS masks.
//
// Why masks rather than <img>.
//
// Icons8 serves SVG only on a paid plan; the free tier is PNG. A PNG is a fixed
// colour, and this site colours icons from CSS everywhere — brand violet in the
// eyebrow pills, white at 60% on the dark test stages, navy on a tint, white on a
// navy button, and several that change on hover. Dropping in <img> would have
// frozen all of that.
//
// So each icon is a black glyph on transparency, used as a mask over
// `background-color: currentColor`. The alpha channel supplies the shape and CSS
// supplies the colour, which is exactly how an inline SVG behaves: every existing
// `text-*` class and hover state keeps working, and no call site changed.
//
// Style: Material Sharp. Chosen over the gradient sets, which read muddy against
// the per-tool tints, and over the more detailed filled sets. Its square corners
// match the 2px corners the rest of the site moved to.
//
// Licence: Icons8 free, which asks for a link to icons8.com on the pages using
// their work. That link is in the footer, which is on every page.
// https://icons8.com/license
import { createElement, type FC } from "react";

/** Short name → file in public/icons/material. Names are unchanged from the
 *  previous set, so every call site kept working. */
export const iconFiles = {
  wallet: "wallet", bell: "bell", zap: "zap", users: "users", target: "target", split: "split", layers: "layers",
  shield: "shield", book: "book", utensils: "utensils", clock: "clock", chart: "chart", camera: "camera",
  notebook: "notebook", orbit: "orbit", globe: "globe", message: "message", quote: "quote", calculator: "calculator",
  percent: "percent", search: "search", history: "history", gamepad: "gamepad", monitor: "monitor", wrench: "wrench",
  check: "check", checkCircle: "checkCircle", arrow: "arrow", external: "external", palette: "palette", phone: "phone",
  pen: "pen", lock: "lock", eyeoff: "eyeoff", sparkles: "sparkles", play: "play", mail: "mail", menu: "menu",
  close: "close", help: "help", browser: "browser",
} as const;

export type IconName = keyof typeof iconFiles;

export const iconUrl = (name: string) =>
  `/icons/material/${iconFiles[name as IconName] ?? iconFiles.sparkles}.webp`;

/** The mask declaration, shared by the Astro and React renderers so the two
 *  cannot drift. Size comes from the caller's own `size-*` class, as before. */
export const maskStyle = (name: string) => {
  const url = `url("${iconUrl(name)}")`;
  return {
    display: "inline-block",
    backgroundColor: "currentColor",
    WebkitMaskImage: url,
    maskImage: url,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  } as const;
};

/** Inline style string, for the Astro renderer. */
export const maskCss = (name: string) => {
  const url = `url("${iconUrl(name)}")`;
  return [
    "display:inline-block",
    "background-color:currentColor",
    `-webkit-mask-image:${url}`,
    `mask-image:${url}`,
    "-webkit-mask-repeat:no-repeat",
    "mask-repeat:no-repeat",
    "-webkit-mask-position:center",
    "mask-position:center",
    "-webkit-mask-size:contain",
    "mask-size:contain",
  ].join(";");
};

/** React renderer, for the components that take an icon as a component —
 *  FeaturedIcon and the pricing cards. Built with createElement so this stays a
 *  .ts file and both renderers keep sharing one definition. */
export const getIcon = (name: string): FC<{ className?: string }> => {
  const style = maskStyle(name);
  const Rendered: FC<{ className?: string }> = (props) =>
    createElement("span", { "aria-hidden": true, ...props, style });
  Rendered.displayName = `Icon(${name})`;
  return Rendered;
};
