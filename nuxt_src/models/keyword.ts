
export type Keyword = string & {
    __keywordTag: any
}

// Factory methods
// From the viewpoint of Tree shaking, avoid class style coding.
export const buildKeywordFromString = (param: string): Keyword => param as Keyword
