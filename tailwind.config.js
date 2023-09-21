/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // text: {
        //   10: 'hsl(var(--color-text10) / <alpha-value>)',
        //   50: 'hsl(var(--color-text50) / <alpha-value>)',
        //   100: 'hsl(var(--color-text100) / <alpha-value>)',
        // },
        bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
        // text100: 'hsl(var(--color-text100) / <alpha-value>)'
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    // themes: ['light', 'dark', 'cupcake'],
  },
};
