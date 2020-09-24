import { DateTime } from 'luxon'
import { Proposal } from './proposal'

export interface Session {
    proposal: Proposal,
    startAt: DateTime,
    endAt: DateTime,
    youtubeUrl?: string,
    slideUrl?: string
}
