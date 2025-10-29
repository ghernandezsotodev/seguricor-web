// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  
  // Le decimos a Astro que construya un sitio 100% estático (SSG)
  output: 'static',
  
  integrations: [
    tailwind(),
    netlify()
  ]
});