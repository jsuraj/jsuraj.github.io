// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jsuraj.github.io",
  integrations: [
    tailwind(),
    mdx(),
    react(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
    sitemap(),
  ],
});
