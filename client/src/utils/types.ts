interface ISymbol {
  value: string
  state: "complited" | "uncomplited" | "error"
  isCurrent: boolean
}

interface IWord extends Array<ISymbol> {
  isComplited: boolean | number
}

interface IText extends Array<IWord> {
  text: string
}

interface ITextWrapper {
  next: (error?: boolean) => boolean
  prev: () => void
  value: () => IText
  currentSymbol: () => string
  caretPosition: (symbolWidth: number, symbolHeight: number) => ICaretPosition
  countOfIncorrect: () => number
  countOfCorrect: () => number
  textLength: () => number
  currentRow: (symbolWidth: number, symbolHeight: number) => number
  countOfRows: (symbolWidth: number, symbolHeight: number) => number
  countOfComplitedSymbols: () => number
}

interface ISymbolPosition {
  w: number
  s: number
}

interface ICaretPosition {
  left: number
  top: number
}

export type {
  ISymbol,
  IWord,
  IText,
  ITextWrapper,
  ISymbolPosition,
  ICaretPosition,
}
