// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', 'acceptHMRUpdate'] },
    ],
  ],
  imports: {
    dirs: ['./stores'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      bodyAttrs: {
        class: ['mt-32', 'lg:mt-36'],
      },
      title: 'Mao Chk',
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      script: [
        {
        },
      ],
      link: [{ rel: 'icon', type: 'image//svg+xml', href: '/favicon.svg' }],
    },
  },
});
