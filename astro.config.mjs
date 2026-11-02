import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://amsbeton.co.id',
  integrations: [tailwind()],
  compressHTML: true,
  output: 'static'
});

