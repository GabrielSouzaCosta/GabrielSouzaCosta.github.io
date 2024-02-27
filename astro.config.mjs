import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), astroI18next(), robotsTxt()],
  output: 'hybrid',
  adapter: vercel()
});