import * as mTypes from './mutation-types'
import { auth, database } from '~/plugins/firebase'
import proposalData from '~/data/proposals/all.json'

export const state = () => ({
  list: shuffle(proposalData),
  isLoading: false
})

// TODO: remove duplication with /nuxt_src/plugins/scalaMatsuriCommon.js
function shuffle(array) {
  let m = array.length
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]]
  }
  return array
}

export const actions = {
  /**
   * fetch proposals
   * NOTE: This action calls Speaker store's "fetch" action.
   * But basically, calling other action from anothor action is NOT recommended.
   */

  /*
      Get proposals from GoogleAppsScript.
      It's commented out since it occurs CORS / preflight problems in Safari and Firefox

  async fetch({ dispatch, commit, rootState }) {
    commit(mTypes.SET_IS_LOADING, true)
    try {
    // fetch proposals and speakers from API
    // const [ { data: proposals }, { data: speakers } ] = await Promise.all([
    //   this.$axios.get('https://firebasestorage.googleapis.com/v0/b/coherent-span-230012.appspot.com/o/proposals%2Fdist%2Fres.json?alt=media&token=4baa4e57-c93e-4ecb-89f0-517d9317c1e8'),
    //   this.$axios.get('https://firebasestorage.googleapis.com/v0/b/coherent-span-230012.appspot.com/o/speakers%2Fdist%2Fres.json?alt=media&token=f4484cc7-5104-4a76-8047-c1a9752b0e60')
    // ])
    // const proposalsWithSpeakers = proposals.map(joinSpeakers(speakers))

      const proposalsWithSpeakers = await this.$axios.get('https://script.google.com/macros/s/AKfycbw0aaFzxpQUGu5VCVEZkWcJuEnzjjQfvyNDrFebdt_93HefnM0/exec')

    commit(mTypes.SET_PROPOSALS, shuffle(proposalWithSpeakers))
  } catch (error) {
    commit(mTypes.SET_PROPOSALS, error)
  }
  commit(mTypes.SET_IS_LOADING, false)
},
     */

  setVotes({ dispatch, commit, rootState }) {
    try {
      // TODO: これはテストなので後で書き換える
      database.collection('users').doc(auth().currentUser.uid).set({
        name: 'test'
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

export const mutations = {
  [mTypes.SET_PROPOSALS](state, proposals) {
    state.list = proposals
  },
  [mTypes.SET_IS_LOADING](state, bool) {
    state.isLoading = bool
  },
  [mTypes.SET_USER_VOTES](state, programs) {
    state.votes = programs
  }
}

export const getters = {
  filterByLengthAndLang: state => (len, lang) => {
    return state.list ? state.list.filter(proposal => proposal.en.language === lang && proposal.en.length === len) : []
  },
  filterByIds: state => (ids) => {
    return state.list.filter(proposal => ids.includes(proposal.id))
  },
  findById: state => (id) => {
    return state.list.find(proposal => id === proposal.id)
  },
  isLoading: state => () => state.isLoading
}
