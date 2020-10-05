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
//TODO: acceptedSessionsはidのみのarrayとし、プロポーザル詳細についてはall.jsonのみを参照するよう修正する
import acceptedSessionData from  '~/data/top/acceptedSessions.json'

export const namespace = 'proposals'

export interface State {
  acceptedSessions: Array<Proposal>
  proposals: Array<Proposal>
}

const initialState = (): State => {
  return {
    acceptedSessions: acceptedSessionData,
    proposals: proposalData
  }
}

const getters = defineGetter<State, RootState>()({
  filterProposalsByLengthAndLang: state => (len: number, lang: string) => {
    return state.proposals ? state.proposals.filter(proposal => proposal.en.language === lang && proposal.en.length === len) : []
  },
  findById: state => (id: string) => {
    var session = state.acceptedSessions.find(proposal => id === proposal.id);
    return session ? session : state.proposals.find(proposal => id === proposal.id)
  }
})

export const proposalsModule = defineModule<State, RootState>()({
  namespaced: true,
  state: initialState,
  actions: combineAction(),
  mutations: combineMutation(),
  getters
})
