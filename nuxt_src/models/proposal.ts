
import { Talk } from './talk'

export type ProposalId = string & {
    __proposalTag: any
}

export interface Proposal {
    id: ProposalId,
    en: Talk,
    ja: Talk
}
