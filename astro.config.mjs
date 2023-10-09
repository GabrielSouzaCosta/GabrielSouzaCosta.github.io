import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import node from "@astrojs/node";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    astroI18next()
  ],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});