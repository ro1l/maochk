// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', 'acceptHMRUpdate'] },
    ],
    'nuxt-phosphor-icons',
  ],
  phosphor: {
    prefix: 'Icon',
  },
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
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
        class: [''],
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
