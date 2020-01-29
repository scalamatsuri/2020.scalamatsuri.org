import * as mTypes from './mutation-types'
import { auth, database } from '@/plugins/firebase'

export const state = () => ({
  votes: [],
  votedIds: []
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
        database.collection('users').doc(user.uid).get().then((doc) => {
          console.log(doc.data())
          commit(mTypes.SET_USER_VOTES, doc.data() && doc.data().votes ? doc.data().votes : [])
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
      // TODO: rootStateを使用しない方法があるはず
      const votes = rootState.vote.votes

      if (user) {
        const userInfo = {
          email: user.email,
          hasTicketCode: false, // TODO: implement later
          name: user.displayName,
          providerId: 'firebase',

          ticketCode: '',
          timestamp: new Date()
        }

        database.collection('users').doc(user.uid).set({
          info: userInfo,
          allVotes: votes
        })
      } else {
        throw new Error('User is not signed in yet.')
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
  },
  [mTypes.APPEND_USER_VOTE](state, vote) {
    if (state.votes.length < 5) { state.votes = [...state.votes, vote] }
  }
}

export const getters = {
  /**
   * resolve sessions that user voted.
   */
  userVotes: (state) => {
    // for avoiding edit.
    const copy = [...state.votes]
    return copy.sort(function (a, b) {
      if (a.rank < b.rank) return -1
      if (a.rank > b.rank) return 1
      return 0
    })
  }
}
