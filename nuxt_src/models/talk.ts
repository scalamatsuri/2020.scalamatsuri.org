
import { Speaker } from './speaker'

export interface Talk {
    title: string,
    detail?: string,
    speakers?: Array<Speaker>,
    language?: string,
    length?: number,
    tags?: Array<string>,
}
