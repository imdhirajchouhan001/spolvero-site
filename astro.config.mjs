// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spolvero.design",
  trailingSlash: "ignore",
  // Every device test and the recorder moved under a category hub on 18 September
  // 2026, while the site was 25 days old with no backlinks — the cheapest moment
  // this was ever going to cost. GitHub Pages serves no 301s, so a static build
  // emits a meta-refresh page with a canonical at each old path instead.
  redirects: {
    "/tools/webcam-test": "/tools/device-tests/webcam-test",
    "/tools/webcam-test/fps": "/tools/device-tests/webcam-test/fps",
    "/tools/webcam-test/google-meet": "/tools/device-tests/webcam-test/google-meet",
    "/tools/webcam-test/iphone": "/tools/device-tests/webcam-test/iphone",
    "/tools/webcam-test/mac": "/tools/device-tests/webcam-test/mac",
    "/tools/webcam-test/obs": "/tools/device-tests/webcam-test/obs",
    "/tools/webcam-test/teams": "/tools/device-tests/webcam-test/teams",
    "/tools/webcam-test/windows": "/tools/device-tests/webcam-test/windows",
    "/tools/webcam-test/zoom": "/tools/device-tests/webcam-test/zoom",
    "/tools/mic-test": "/tools/device-tests/mic-test",
    "/tools/mic-test/airpods": "/tools/device-tests/mic-test/airpods",
    "/tools/mic-test/discord": "/tools/device-tests/mic-test/discord",
    "/tools/mic-test/google-meet": "/tools/device-tests/mic-test/google-meet",
    "/tools/mic-test/teams": "/tools/device-tests/mic-test/teams",
    "/tools/mic-test/windows": "/tools/device-tests/mic-test/windows",
    "/tools/mic-test/zoom": "/tools/device-tests/mic-test/zoom",
    "/tools/speaker-test": "/tools/device-tests/speaker-test",
    "/tools/speaker-test/headphones": "/tools/device-tests/speaker-test/headphones",
    "/tools/speaker-test/mac": "/tools/device-tests/speaker-test/mac",
    "/tools/speaker-test/surround": "/tools/device-tests/speaker-test/surround",
    "/tools/speaker-test/windows": "/tools/device-tests/speaker-test/windows",
    "/tools/keyboard-test": "/tools/device-tests/keyboard-test",
    "/tools/keyboard-test/gaming": "/tools/device-tests/keyboard-test/gaming",
    "/tools/keyboard-test/laptop": "/tools/device-tests/keyboard-test/laptop",
    "/tools/keyboard-test/mac": "/tools/device-tests/keyboard-test/mac",
    "/tools/keyboard-test/mechanical": "/tools/device-tests/keyboard-test/mechanical",
    "/tools/dead-pixel-test": "/tools/device-tests/dead-pixel-test",
    "/tools/dead-pixel-test/laptop": "/tools/device-tests/dead-pixel-test/laptop",
    "/tools/dead-pixel-test/monitor": "/tools/device-tests/dead-pixel-test/monitor",
    "/tools/dead-pixel-test/phone": "/tools/device-tests/dead-pixel-test/phone",
    "/tools/dead-pixel-test/tv": "/tools/device-tests/dead-pixel-test/tv",
    "/tools/voice-recorder": "/tools/audio/voice-recorder"
  },
  devToolbar: { enabled: false },
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/contact/thanks") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
