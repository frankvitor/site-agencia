// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Atualize junto com siteConfig.url ao definir o domínio.
  site: 'https://www.seudominio.com.br',
  trailingSlash: 'ignore',

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },

  // Gera <meta> CSP com hash de cada script/estilo — bloqueia scripts injetados.
  security: {
    csp: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
