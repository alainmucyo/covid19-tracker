const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
server: {
    port: 3000,
  },
  head: {
    titleTemplate: '%s',
    title: 'Covid19 Tracker',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3f51b5',height: '10px' },
  plugins: [
    '~plugins/main.js',
  ],
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-162558111-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://corona.lmao.ninja/v2'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [/^vue2-google-maps($|\/)/],
    extend(config, ctx) {
    },
    babel: {
      presets: function({ isServer }, [preset, options]) {

        const r = [
          [
            preset, {
            buildTarget: isServer ? 'server' : 'client',
            ...options
          }]
          // [ Other presets ]
        ]

        r[0][1].targets = {
          'browsers': ['> 1%', 'last 2 versions'],
          ie: 11
        }

        r[0][1].polyfills = [
          'es6.array.iterator',
          'es6.promise',
          'es6.object.assign',
          'es6.symbol',
          'es6.array.find',
          'es6.array.from',
          'es7.promise.finally',
          'es7.object.entries'
        ]

        return r
      },

      plugins: [
        ['@babel/plugin-transform-runtime']
      ]
    }
  }
}
