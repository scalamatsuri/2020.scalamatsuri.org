
export type Tag = string & {
    __tagTag: any
}

// Factory methods
// From the viewpoint of Tree shaking, avoid class style coding.
export const buildTagFromString = (param: string): Tag => param as Tag