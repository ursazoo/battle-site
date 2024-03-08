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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/color.scss" as *;',
        },
      },
    },
  },
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],
  // elementPlus: {
  //   /** Options */
  // },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
  },
  runtimeConfig: {
    apiSecret: '', // 可以被 NUXT_API_SECRET 环境变量覆盖
    public: {
      apiBase: '', // 可以被 NUXT_PUBLIC_API_BASE 环境变量覆盖
    },
  },
});
