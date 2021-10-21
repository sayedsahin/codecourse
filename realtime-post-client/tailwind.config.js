module.exports = {
  mode: 'jit',
  purge: [
    `components/**/*.vue`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.js`,
    `nuxt.config.js`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
