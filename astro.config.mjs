// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  // or 'hybrid'
  output: 'server',

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()]
  }
});