module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/nuxt_src/$1',
    '^~/(.*)$': '<rootDir>/nuxt_src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
