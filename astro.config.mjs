// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://spolvero.design",
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  integrations: [react(), sitemap({ filter: (page) => !page.includes("/contact/thanks") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
