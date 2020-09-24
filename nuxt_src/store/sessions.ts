
import * as mTypes from './mutation-types'
import {
  combineMutation,
  combineAction,
  action,
  mutation
} from 'vuex-typescript-fsa'
import { defineModule, defineGetter } from '~/store/helpers'
import { RootState } from '~/store'
import { Session } from '~/models/session'

export const namespace = 'sessions'

export interface State {
  sessions: Array<Session>
}

const initialState = (): State => {
  return {
    sessions: []
  }
}

export const sessionsModule = defineModule<State, RootState>()({
  namespaced: true,
  state: initialState,
  actions: combineAction(),
  mutations: combineMutation(),
})