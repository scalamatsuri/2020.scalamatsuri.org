import {
  combineMutation,
  combineAction,
  action,
  mutation
} from 'vuex-typescript-fsa'
import { defineModule, defineGetter } from '~/store/helpers'
import { RootState } from '~/store'

import { Proposal } from '~/models/proposal'

import proposalData from '~/data/proposals/all.json'

export const namespace = 'sessions'

export interface State {
  proposals: Array<Proposal>
}

const initialState = (): State => {
  return {
    proposals: []
  }
}

const getters = defineGetter<State, RootState>()({
  filterByLengthAndLang: state => (len: number, lang: string) => {
    return state.proposals ? state.proposals.filter(proposal => proposal.en.language === lang && proposal.en.length === len) : []
  },
  filterByIds: state => (ids) => {
    return state.proposals.filter(proposal => ids.includes(proposal.id))
  },
  findById: state => (id) => {
    return state.proposals.find(proposal => id === proposal.id)
  }
})

export const proposalsModule = defineModule<State, RootState>()({
  namespaced: true,
  state: initialState,
  actions: combineAction(),
  mutations: combineMutation(),
  getters
})
