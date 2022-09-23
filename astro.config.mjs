import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ozencbilgili.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md

      // theme: 'monokai',
      // theme: 'css-variables',
      // theme: 'dark-plus',
      // theme: 'dracula-soft',
      // theme: 'dracula',
      // theme: 'github-dark-dimmed',
      // theme: 'github-dark',
      // theme: 'github-light',
      // theme: 'hc_light',
      // theme: 'light-plus',
      // theme: 'material-darker',
      // theme: 'material-default',
      // theme: 'material-lighter',
      // theme: 'material-ocean',
      // theme: 'material-palenight',
      theme: 'min-dark',
      // theme: 'min-light',
      // theme: 'monokai',
      // theme: 'nord',
      // theme: 'one-dark-pro',
      // theme: 'poimandres',
      // theme: 'rose-pine-dawn',
      // theme: 'rose-pine-moon',
      // theme: 'rose-pine',
      // theme: 'slack-dark',
      // theme: 'slack-ochin',
      // theme: 'solarized-dark',
      // theme: 'solarized-light',
      // theme: 'vitesse-dark',
      // theme: 'vitesse-light'

      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  }
});
