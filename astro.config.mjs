import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hyb.art',
  trailingSlash: 'never',
  build: { format: 'file' },
});
