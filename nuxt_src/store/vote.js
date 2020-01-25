import * as mTypes from './mutation-types'
import { auth, database } from '@/plugins/firebase'

export const state = () => ({
  votes: []
})

export const actions = {
  /**
   * fewtch users votes from firestore.
   * NOTE: This function never concerns about auth's initialization status.
   *       Please be aware that auth is initialized before it's call.
   */
  fetch({ commit }) {
    try {
      const user = auth.currentUser
      if (user) {
        database.collection('users').doc(user.uid).get().then((data) => {
          commit(mTypes.SET_USER_VOTES, data.votes || [])
        })
      } else {
        throw new Error('User is not signed in yet.')
      }
    } catch (error) {
      return Promise.reject(error)
    }
  },

  /**
   * Store local votes to firebase firestore.
   */
  store({ rootState }) {
    try {
      const user = auth.currentUser
      if (user) {
        database.collection('users').doc(auth.currentUser.uid).set({
          uid: user.uid,
          votes: rootState.vote.votes
        })
      } else {
        throw new Error('User is not signed in yet.')
      }
    } catch (error) {
      return Promise.reject(error)
    }
  },
  /**
   * Append single vote on local store
   */
  append({ commit }, vote) {
    try {
      if (state.votes.length < 5) {
        commit(mTypes.SET_USER_VOTES, state.votes + vote)
      } else {
        // TODO: ここのエラーハンドリングどうしようか…？そもそもコレはエラーなんだっけ
        throw Error('Your votes reached limit.')
      }
    } catch (error) {
      return Promise.reject(error)
    }
  },
  /**
   * Remove Single vote on local store.
   */
  remove({ dispatch, commit, rootState }, id) {
    try {

    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const mutations = {
  [mTypes.SET_USER_VOTES](state, votes) {
    state.votes = votes
  }
}

export const getters = {
  /**
   * resolve sessions that user voted.
   */
  userVotes: (state) => {
    // for avoiding edit.
    const copy = [...state.votes]
    copy.sort(function (a, b) {
      if (a.rank < b.rank) return -1
      if (a.rank > b.rank) return 1
      return 0
    })
  }
}
