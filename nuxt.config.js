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
    { src: '~/plugins/firebase', ssr: false },
    { src: '~/plugins/scalaMatsuriCommon', ssr: false },
    { src: '~/plugins/toast', ssr: false },
    { src: '~/plugins/scalaMatsuriCommon', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/sentry',
    ['@nuxtjs/google-analytics', {
      id: 'UA-51559416-6'
    }],
    ['nuxt-i18n', {
      baseUrl: 'http://scalamatsuri.org',
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
        fallbackLocale: 'en'
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
  sentry: {
    dsn: 'https://0dc25f3d199249d7a209f4fd48cdc9a6@sentry.io/2211949',
    config: {}
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
