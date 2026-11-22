import { defineConfig } from 'astro/config';

// Endereço do GitHub Pages. Se o repositório mudar de nome, troque "base".
export default defineConfig({
  site: 'https://rogeriobie2016-ship-it.github.io',
  base: '/filogenia-viva',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
