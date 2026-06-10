import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hyb.art',
  trailingSlash: 'never',
  build: { format: 'file' },
});
