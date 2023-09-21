module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/vue3-recommended',
    'plugin:vue/base',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': 'off', // disables line length check
  },
};
