
import * as mTypes from './mutation-types'
import {
  combineMutation,
  combineAction
} from 'vuex-typescript-fsa'
import { DateTime } from 'luxon'
import { sortBy, groupBy, Dictionary } from 'lodash'
import { defineModule, defineGetter } from '~/store/helpers'
import { RootState } from '~/store'
import { Session } from '~/models/session'

import sessionsData from '~/data/sessions/all.json'
import proposalData from '~/data/top/acceptedSessions.json'
import sponsorSessionData from '~/data/sponsor-sessions/all.json'
import { Proposal } from '~/models/proposal'

export const namespace = 'sessions'

interface PartialSession {
  startAt: number,
  endAt: number,
  id?: string, // proposal id
  title?: string, // alternative to proposal id.
  room?: string,
  youtubeUrl?: string,
  slideUrl?: string
}

export interface State {
  sessions: Array<Session>
}

const initialState = (): State => {
  const partialSessions: Array<PartialSession> = sessionsData
  const proposals: Array<Proposal> = proposalData
  const sponsorSessions: Array<Proposal> = sponsorSessionData

  // All sessions, containing: proposals, sponsor sessions, and unconference sessions.
  const sessionsMap: Map<string, Proposal> = new Map(proposals.concat(sponsorSessions).map(p => [p.id, p]))

  return {
    sessions: partialSessions.map(s => 
      ({
        ...s,
        proposal: s.id ? sessionsMap.get(s.id) : undefined
      })
    )
  }
}

const getters = defineGetter<State, RootState>()({
  /**
   * Get sessions that held on specific date and sorted by its start time.
   */
  filterByDateAndGroupByStartAt: state => (date: number): Dictionary<Session[]> => {
    const targets = state.sessions.filter(s => DateTime.fromSeconds(s.startAt).setZone(`UTC+9`).day === date)
    return  groupBy(sortBy(targets, ['startAt']), 'startAt')
  }
})

export const sessionsModule = defineModule<State, RootState>()({
  namespaced: true,
  state: initialState,
  actions: combineAction(),
  mutations: combineMutation(),
  getters
})