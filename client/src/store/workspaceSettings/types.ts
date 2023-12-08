enum InterfaceLanguage {
  ru,
  eng,
}

interface IWorkspace {
  showTimer: boolean
  showCountOfMistakes: boolean
  interfaceLanguage: string
}

export { InterfaceLanguage }
export type { IWorkspace }
