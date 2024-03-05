// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {},
  modules: ['@pinia/nuxt'],
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
});
