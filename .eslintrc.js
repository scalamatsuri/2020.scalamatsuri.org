module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "no-console" : "warn",
    "vue/no-v-html" : "off"
  }
}
