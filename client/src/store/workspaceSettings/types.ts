enum InterfaceLanguage {
  russian,
  english,
}

interface IWorkspace {
  showTimer: boolean
  showCountOfMistakes: boolean
  interfaceLanguage: string
}

export { InterfaceLanguage }
export type { IWorkspace }
