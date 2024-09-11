// @ts-check
import { defineConfig } from 'astro/config';
const isProd = import.meta.env.PROD;

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jsuraj.github.io',
  ...(isProd ? { base: 'jsuraj.github.io' } : {}),
  integrations: [tailwind()],
});
