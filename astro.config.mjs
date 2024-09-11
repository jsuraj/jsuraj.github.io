// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jsuraj.github.io',
  base: 'jsuraj.github.io',
  integrations: [tailwind()]
});