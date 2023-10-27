interface IStoreItem {
  key: string
  value: string | boolean
}

interface IParsedStore {
  [key: string]: string | boolean
}

export type { IStoreItem, IParsedStore }
