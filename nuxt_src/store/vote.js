import * as mTypes from './mutation-types'
import { auth, database } from '@/plugins/firebase'

export const state = () => ({
  votes: [],
  votedIds: [],
  userInfo: {}
})

export const actions = {
  /**
   * fewtch users votes from firestore.
   * NOTE: This function never concerns about auth's initialization status.
   *       Please be aware that auth is initialized before it's call.
   */
  async fetch({ commit }) {
    try {
      const user = auth.currentUser
      if (user) {
        await database.collection('users').doc(user.uid).get().then(async (doc) => {
          await commit(mTypes.SET_USER_VOTES, doc.data() && doc.data().votes ? doc.data().votes : [])
          await commit(mTypes.SET_USER_INFO, doc.data() && doc.data().info ? doc.data().info : {})
          await commit(mTypes.SET_CHECKIN_CODE, doc.data() && doc.data().info ? doc.data().info.ticketCode : '')
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
  store({ state }) {
    try {
      const user = auth.currentUser
      // TODO: rootStateを使用しない方法があるはず
      const votes = state.votes

      if (user) {
        const userInfo = {
          ...state.userInfo,
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
  },
  [mTypes.SET_CHECKIN_CODE](state, code) {
    state.userInfo = {
      ...state.userInfo,
      hasTicketCode: code && code.length > 1,
      ticketCode: code || ''
    }
  },
  [mTypes.SET_USER_INFO](state, user) {
    if (user) {
      state.userInfo = {
        ...state.userInfo,
        email: user.email,
        name: user.name,
        providerId: 'firebase',
        timestamp: new Date()
      }
    }
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
  },
  checkinCode: state => state.userInfo.ticketCode
}
