// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://bitopsdev.com',

  output: 'static',

  integrations: [mdx(), sitemap()],

  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  // Simplified fonts - removed complex config that was causing errors
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
});