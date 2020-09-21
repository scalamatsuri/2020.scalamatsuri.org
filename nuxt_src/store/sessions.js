import * as mTypes from './mutation-types'

export const state = () => ({
  list: []
})

export const actions = {
}

export const mutations = {
  [mTypes.SET_BLOG_POSTS](state, posts) {
    state.list = posts
  }
}
