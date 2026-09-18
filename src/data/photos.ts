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
};

export const getPhoto = (key: string): Photo | undefined => photos[key];
