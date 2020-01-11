import * as mTypes from './mutation-types'

export const state = () => ({
  list: [],
  isLoading: false,
  votes: []
})

export const actions = {
  /**
   * fetch proposals
   * NOTE: This action calls Speaker store's "fetch" action.
   * But basically, calling other action from anothor action is NOT recommended.
   */
  async fetch({ dispatch, commit, rootState }) {
    commit(mTypes.SET_IS_LOADING, true)
    try {
      // fetch proposals and speakers from API
      const [ { data: proposals }, { data: speakers } ] = await Promise.all([
        this.$axios.get('https://firebasestorage.googleapis.com/v0/b/coherent-span-230012.appspot.com/o/proposals%2Fdist%2Fres.json?alt=media&token=4baa4e57-c93e-4ecb-89f0-517d9317c1e8'),
        this.$axios.get('https://firebasestorage.googleapis.com/v0/b/coherent-span-230012.appspot.com/o/speakers%2Fdist%2Fres.json?alt=media&token=f4484cc7-5104-4a76-8047-c1a9752b0e60')
      ])
      const proposalsWithSpeakers = proposals.map(joinSpeakers(speakers))
      commit(mTypes.SET_PROPOSALS, proposalsWithSpeakers)
    } catch (error) {
      return Promise.reject(error)
    }
    commit(mTypes.SET_IS_LOADING, false)
  }

  async setVotes({ dispatch, commit, rootState }) {
    try {
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
    return state.list.filter(proposal => proposal[lang] && proposal[lang].length === len)
  },
  isLoading: state => () => state.isLoading,
  /**
   * resolve sessions that user voted.
   */
  userVotes: state => state.votes.sort(function (a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
}

// --[ Private Functions ]-----------------------------------------------------
/**
 * join Speakers to proposal
 * NOTE: This function overwrite proposal's speakers property.
 */
const joinSpeakers = speakers => (proposal) => {
  const intersect = speakers.filter(speaker => proposal.speakers.includes(speaker.id))
  return { ...proposal, speakers: intersect }
}
