export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Reale Time Post',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
    ],
    script: [
      // { src: "/js/bootstrap.bundle.min.js", type: "text/javascript"}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   "~assets/styles.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: './plugins/vue-observe-visibility', mode: 'client'},
    {src: './plugins/echo', mode: 'client'},
    {src: './plugins/axios', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000'
      }
    }
  },
  axios: {
    baseUrl: 'http://localhost:8000',
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
