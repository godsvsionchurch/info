export type languageType = "kor" | "eng"

export type stringObjectType = {[key: string]: string}
export type categoryItemType = {name: string, contents?: stringObjectType[]}
export type dataType = {[key: string]: {[key in languageType]: categoryItemType}}