import { auth } from '@/plugins/firebase'

/**
 * Reflect Firebase auth state to Vuex.
 */
const listenAuthState = (store) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit('auth/setUser', user)
    } else {
      store.commit('auth/logout')
    }
  })
}

export const plugins = [listenAuthState]
