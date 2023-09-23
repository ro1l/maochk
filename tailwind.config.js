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
      animation: {
        pop: 'pop 2s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.98)' },
          '40%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
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
