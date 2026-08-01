import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Keystatic's admin route (/keystatic) requires on-demand server
  // rendering, which only exists in `dist/server`. The GitHub Pages
  // workflow deploys just `dist/client` (the prerendered static pages),
  // so Keystatic is only ever reachable locally via `npm run dev` and
  // is never part of the deployed site.
  integrations: [react(), markdoc(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://bramvanpevenage.github.io',
  base: '/WebCv/',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
