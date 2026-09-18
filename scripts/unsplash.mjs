#!/usr/bin/env node
// Finds a photo on Unsplash and prints an entry for src/data/photos.ts.
//
// Usage:  UNSPLASH_ACCESS_KEY=xxx node scripts/unsplash.mjs solar panels
//
// It also triggers the download endpoint, which Unsplash's API terms require
// whenever a photo is chosen for use. That call is made once, here — not on
// every page view, which would be both wrong and slow.

const key = process.env.UNSPLASH_ACCESS_KEY;
const query = process.argv.slice(2).join(" ");

if (!key) {
  console.error("Set UNSPLASH_ACCESS_KEY first. Create an app at https://unsplash.com/oauth/applications");
  process.exit(1);
}
if (!query) {
  console.error("Give it something to search for, e.g. node scripts/unsplash.mjs classroom");
  process.exit(1);
}

const headers = { Authorization: `Client-ID ${key}`, "Accept-Version": "v1" };
const utm = "?utm_source=spolvero&utm_medium=referral";

const search = await fetch(
  `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
  { headers },
);

if (!search.ok) {
  console.error(`Unsplash said ${search.status}: ${await search.text()}`);
  process.exit(1);
}

const { results } = await search.json();
if (!results?.length) {
  console.error(`Nothing found for "${query}".`);
  process.exit(1);
}

for (const photo of results) {
  // Required by the API terms when a photo is selected for use.
  await fetch(photo.links.download_location, { headers }).catch(() => {});

  const key = query.toLowerCase().replace(/\s+/g, "-");
  console.log(`
  "${key}": {
    id: "${photo.id}",
    url: "${photo.urls.raw}",
    alt: ${JSON.stringify(photo.alt_description || photo.description || query)},
    credit: ${JSON.stringify(photo.user.name)},
    creditUrl: "${photo.user.links.html}${utm}",
    unsplashUrl: "https://unsplash.com${utm}",
  },`);
}

console.log(`\n${results.length} options above — paste the one you want into src/data/photos.ts`);
