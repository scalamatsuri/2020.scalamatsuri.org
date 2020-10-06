
import { Proposal } from './proposal'

export interface Session {
    startAt: number, // unixtime
    endAt: number, // unixtime
    proposal?: Proposal | null,
    title?: string,
    room?: string,
    youtubeUrl?: string,
    slideUrl?: string
}
