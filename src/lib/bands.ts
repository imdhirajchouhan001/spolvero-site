// Section surfaces.
//
// Pages here were built on a single background — the tool pages ran ten sections
// deep without changing colour once — which reads as one column of text and gets
// skimmed rather than read. Sections alternate white and the two periwinkle washes
// so each one lands as its own block.
//
// Three surfaces, no more. Past three the alternation stops reading as structure
// and starts looking like decoration, and the point is to help someone see where
// one idea ends and the next begins.
export type Band = { style: string; card: string };

export const BANDS: Band[] = [
  { style: "background:var(--color-bg-primary)", card: "bg-secondary" },
  { style: "background:var(--color-wash-soft)", card: "bg-primary" },
  { style: "background:var(--color-bg-primary)", card: "bg-secondary" },
  { style: "background:var(--color-wash)", card: "bg-primary" },
];

/**
 * Assigns a surface to each named section, in order.
 *
 * Pass only the sections that will actually render. Half of them are conditional
 * on most pages, and a fixed index per section would put two washes side by side
 * on exactly the pages that are shortest — where the rhythm matters most.
 *
 * `cards` flips to white on a coloured band, because `bg-secondary` is all but
 * invisible against a wash.
 */
export const bandCycle = (names: string[]): Record<string, Band> => {
  const out: Record<string, Band> = {};
  names.forEach((name, i) => { out[name] = BANDS[i % BANDS.length]; });
  return out;
};
