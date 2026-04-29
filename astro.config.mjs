// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitopsdev.com',

  output: 'static',        // Pure static

  integrations: [mdx(), sitemap()],

  // No Cloudflare adapter for now
});