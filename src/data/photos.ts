// Photographs used on the site.
//
// Unsplash's API terms require three things, all of which this file and
// PhotoCard.astro handle together:
//
//   1. Hot-link from images.unsplash.com rather than copying the file into the
//      repo, so Unsplash can serve and count it.
//   2. Credit the photographer and link back to their profile and to Unsplash,
//      each with the utm parameters below.
//   3. Trigger the download endpoint when a photo is chosen for use. That is a
//      one-off call made when adding a photo here, not on every page view —
//      see scripts/unsplash.mjs.
//
// Adding a photo: run `node scripts/unsplash.mjs <search terms>` with
// UNSPLASH_ACCESS_KEY set, and paste the entry it prints.

export type Photo = {
  id: string;
  /** The raw images.unsplash.com URL, without sizing parameters. */
  url: string;
  alt: string;
  credit: string;
  creditUrl: string;
  unsplashUrl: string;
};

export const photos: Record<string, Photo> = {};

export const getPhoto = (key: string): Photo | undefined => photos[key];
