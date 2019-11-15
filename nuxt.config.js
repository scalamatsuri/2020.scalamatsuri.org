module.exports = {
  mode: 'universal',
  srcDir: 'nuxt_src/',

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  head: {
    meta: [
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' }
    ],
    link: [
      { rel: 'dns-prefetch', href: '//maps.googleapis.com' },
      { rel: 'dns-prefetch', href: '//maps.gstatic.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//connect.facebook.net' },
      { rel: 'dns-prefetch', href: '//platform.twitter.com' },
      { rel: 'dns-prefetch', href: '//b.st-hatena.com' },
      { rel: 'dns-prefetch', href: '//blog.scalamatsuri.org' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/vendor/sanitize.css/sanitize.css',
    '~/assets/scss/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue2-google-maps', ssr: false },
    { src: '~/plugins/lazyload', ssr: false },
    { src: '~/plugins/i18n', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
    ['nuxt-i18n', {
      baseUrl: 'http://2020.scalamatsuri.org',
      locales: [
        {
          code: 'ja',
          iso: 'ja_JP',
          name: '日本語'
        },
        {
          code: 'en',
          iso: 'en_US',
          name: 'English'
        }
      ],
      strategy: 'prefix',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'scalamatsuri_i18n_redirected',
        alwaysRedirect: false
      },
      rootRedirect: 'en',
      vueI18nLoader: true,
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          'en': {
            'locale_iso': 'en_US'
          },
          'ja': {
            'locale_iso': 'ja_JP'
          }
        }
      }
    }],
    ['nuxt-mq', {
      defaultBreakpoint: 'default',
      breakpoints: {
        sm: 600,
        lg: Infinity
      }
    }]
  ],
  /**
   * nuxt-optimized-images config
   */
  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: ['@kazupon/vue-i18n-loader', 'yaml-loader']
      })
      config.module.rules.push({
        test: /\.yaml$/,
        use: ['js-yaml-loader']
      })
    }
  },
  generate: {
    fallback: '404.html'
  },
  render: {
    resourceHints: false,
    compressor: {
      threshold: 0,
      level: 9
    }
  }
}
