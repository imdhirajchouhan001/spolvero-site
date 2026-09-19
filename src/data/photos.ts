// Photographs used on the site.
//
// Every entry was taken from unsplash.com and is used under the Unsplash
// Licence: free for commercial use, no permission needed. Attribution is not
// strictly required by that licence, but `PhotoCard.astro` renders it anyway —
// it costs a line of small text and it is the decent thing to do.
//
// Note the distinction from the API: `scripts/unsplash.mjs` talks to the Unsplash
// *API*, whose terms additionally require triggering a download endpoint on
// selection and hot-linking from their CDN. These entries were sourced from the
// website rather than the API, so that requirement does not apply — but they are
// still hot-linked from images.unsplash.com, because their CDN resizes and
// re-encodes on demand and is faster than anything self-hosted here would be.
//
// Adding one by hand: find the photo on unsplash.com, take the id from the end of
// the URL, and the base image URL from the img src with its query string removed.

export type Photo = {
  id: string;
  /** The images.unsplash.com URL, with no sizing parameters. */
  url: string;
  alt: string;
  credit: string;
  creditUrl: string;
  unsplashUrl: string;
};

const utm = "?utm_source=spolvero&utm_medium=referral";

export const photos: Record<string, Photo> = {
  "webcam-test": {
    id: "_SzvRwdFo6o",
    url: "https://images.unsplash.com/photo-1628645339131-0c39c7527856",
    alt: "Someone on a video call at a desk, holding a mug",
    credit: "Helena Lopes",
    creditUrl: `https://unsplash.com/@helenalopesph${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  timers: {
    id: "zFSo6bnZJTw",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    alt: "A teacher presenting to a classroom of students",
    credit: "Quilia",
    creditUrl: `https://unsplash.com/@heyquilia${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  audio: {
    id: "c1ZN57GfDB0",
    url: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    alt: "A studio condenser microphone, close up",
    credit: "Jonathan Velasquez",
    creditUrl: `https://unsplash.com/@jonathanvez${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  studio: {
    id: "h7v_38e3iGE",
    url: "https://images.unsplash.com/photo-1487338875411-8880f74114a2",
    alt: "Two monitors side by side on a designer's desk",
    credit: "Tran Mau Tri Tam",
    creditUrl: `https://unsplash.com/@tranmautritam${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  unspend: {
    id: "Q59HmzK38eQ",
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    alt: "Someone at a laptop holding a payment card",
    credit: "rupixen",
    creditUrl: `https://unsplash.com/@rupixen${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  exact: {
    id: "qWYvQMIJyfE",
    url: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33",
    alt: "A digital camera held up, showing a photograph on its screen",
    credit: "Jamie Street",
    creditUrl: `https://unsplash.com/@jamie452${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  enough: {
    id: "zFEY4DP4h6c",
    url: "https://images.unsplash.com/photo-1534616042650-80f5c9b61f09",
    alt: "A clear glass filled with water",
    credit: "manu schwendener",
    creditUrl: `https://unsplash.com/@manuschwendener${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "gst-calculator": {
    id: "3zgia9k593w",
    url: "https://images.unsplash.com/photo-1758910536889-43ce7b3199fd",
    alt: "Trays of colourful Indian sweets on display in a shop",
    credit: "Sadia Alam",
    creditUrl: `https://unsplash.com/@sadiaalam${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  flash: {
    id: "5Vp4myr4GGo",
    url: "https://images.unsplash.com/photo-1576311862943-8fb91d627fec",
    alt: "A figure standing under a single street light in the dark",
    credit: "Jeremy Bishop",
    creditUrl: `https://unsplash.com/@jeremybishop${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },

  // One per article, so no two guides share a picture. Chosen on unsplash.com
  // with the free-licence filter on, which excludes Unsplash+ images.
  "article-webcam-resolution": {
    id: "lq87UxGSiEQ",
    url: "https://images.unsplash.com/photo-1623949556303-b0d17d198863",
    alt: "A white webcam clipped to the top of a monitor",
    credit: "Emiliano Cicero",
    creditUrl: `https://unsplash.com/@emilianocicero${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-camera-in-use": {
    id: "smgTvepind4",
    url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    alt: "A laptop showing a video call with a grid of participants",
    credit: "Chris Montgomery",
    creditUrl: `https://unsplash.com/@cwmonty${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-camera-not-working": {
    id: "bu5LEzvtAKY",
    url: "https://images.unsplash.com/photo-1758874572670-63042c5448c6",
    alt: "A man holding his head in frustration at a desk with a laptop",
    credit: "Vitaly Gariev",
    creditUrl: `https://unsplash.com/@silverkblack${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-android-phone": {
    id: "TSJqQCN4RKA",
    url: "https://images.unsplash.com/photo-1671445791136-049a3f151e3c",
    alt: "A hand holding an Android phone open on its home screen",
    credit: "Onur Binay",
    creditUrl: `https://unsplash.com/@onurbinay${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-camera-hacked": {
    id: "OLzlXZm_mOw",
    url: "https://images.unsplash.com/photo-1544717305-f9c88f2897bc",
    alt: "A woman glancing warily away from her open laptop",
    credit: "Icons8 Team",
    creditUrl: `https://unsplash.com/@icons8${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-ring-light": {
    id: "7TCpfJ1yReE",
    url: "https://images.unsplash.com/photo-1617349035633-952a8907bdb0",
    alt: "A person at a desk lit by a ring light",
    credit: "Waddas Magalhães",
    creditUrl: `https://unsplash.com/@waddasmagalhaes${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-headphones": {
    id: "PDX_a_82obo",
    url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    alt: "Black over-ear headphones on a yellow background",
    credit: "C D-X",
    creditUrl: `https://unsplash.com/@cdx2${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-household": {
    id: "yw0lwidZ_Ig",
    url: "https://images.unsplash.com/photo-1665827491450-c6f329f2285c",
    alt: "A woman and two children eating popcorn while watching a film at home",
    credit: "Wemax Projectors",
    creditUrl: `https://unsplash.com/@wemaxprojectors_10397433_sink${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-public-speaking": {
    id: "RfiBK6Y_upQ",
    url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    alt: "A speaker addressing a large audience in a hall",
    credit: "Miguel Henriques",
    creditUrl: `https://unsplash.com/@miguel_photo${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-budget": {
    id: "-tb6j_YMNmg",
    url: "https://images.unsplash.com/photo-1789551479810-96e50efdeebb",
    alt: "A notebook, calculator, pen and coins on a beige cloth",
    credit: "Numbers On Your Tip",
    creditUrl: `https://unsplash.com/@numbersonyourtip${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
  "article-camera-lens": {
    id: "jvPTh8YAgYM",
    url: "https://images.unsplash.com/photo-1604677209492-763493452f54",
    alt: "A camera lens lit red and blue, close up",
    credit: "TheRegisti",
    creditUrl: `https://unsplash.com/@theregisti${utm}`,
    unsplashUrl: `https://unsplash.com${utm}`,
  },
};

export const getPhoto = (key: string): Photo | undefined => photos[key];

/**
 * The photograph for a page path. Articles have no photographs of their own; they
 * borrow the one belonging to the tool or app they send the reader to, which is
 * also what the article is about.
 */
export const photoKeyForPath = (path: string): string => {
  if (path.includes("/webcam-test")) return "webcam-test";
  if (path.includes("/tools/audio/") || path.includes("/mic-test") || path.includes("/speaker-test")) return "audio";
  if (path.includes("/tools/timers/")) return "timers";
  const app = path.split("/").filter(Boolean)[0];
  if (app && photos[app]) return app;
  return "studio";
};

/** An article's photograph: its own `image` key if it names one, else its tool's. */
export const articlePhoto = (a: { tool: string; image?: string }): Photo =>
  photos[a.image ?? ""] ?? photos[photoKeyForPath(a.tool)] ?? photos.studio;

/** An Unsplash CDN URL at a given width, cropped to fill. */
export const photoSrc = (p: Photo, w: number, h?: number) =>
  `${p.url}?w=${w}${h ? `&h=${h}` : ""}&q=75&fm=webp&fit=crop`;
