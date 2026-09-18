// Picking an icon colour that belongs to its tile.
//
// Every tool carries a pale `tint` for its tile and a saturated `accent`. The
// icon was drawn in one flat navy on all of them, so a peach tile, a mint tile
// and a yellow tile all held the same blue-black glyph and the colour did no
// work.
//
// The accent cannot simply be used as-is. Measured against its own tint, nine of
// the fourteen pairs fall below the 3:1 that 1.4.11 asks of a graphic you are
// meant to read — #ffc83d on #fff4d9 measures 1.41, which is a yellow icon on a
// yellow card and effectively invisible.
//
// So the accent is walked down in lightness, hue and saturation held, until it
// clears the threshold. Orange stays orange and pink stays pink; yellow lands on
// a deep amber, because a yellow that is dark enough to read is not yellow any
// more and that is a property of yellow rather than a compromise.

const srgb = (c: number) => {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

const luminance = (hex: string) =>
  0.2126 * srgb(parseInt(hex.slice(1, 3), 16)) +
  0.7152 * srgb(parseInt(hex.slice(3, 5), 16)) +
  0.0722 * srgb(parseInt(hex.slice(5, 7), 16));

export const contrast = (a: string, b: string) => {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

const toHsl = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (!d) return [0, 0, l];
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h = (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4) / 6;
  return [h, s, l];
};

const toHex = (h: number, s: number, l: number) => {
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const c = l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
    return Math.round(255 * c).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

/**
 * The accent, darkened only as far as it needs to be to read on its own tint.
 *
 * 3.5 rather than a bare 3.0, so a later nudge to a tint does not quietly drop a
 * pair under the line.
 */
export const inkOn = (accent: string, tint: string, min = 3.5): string => {
  let [h, s, l] = toHsl(accent);
  for (let i = 0; i < 100 && l > 0.05; i++) {
    const candidate = toHex(h, s, l);
    if (contrast(candidate, tint) >= min) return candidate;
    l -= 0.01;
  }
  return toHex(h, s, 0.05);
};
