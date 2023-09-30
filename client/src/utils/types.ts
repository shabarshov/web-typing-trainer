interface ISymbol {
  value: string
  state: "complited" | "uncomplited" | "current"
}

interface IWord extends Array<ISymbol> {
  isComplited: boolean | number
}

interface IText extends Array<IWord> {
  text: string
}

interface ITextWrapper {
  next: () => boolean
  prev: () => boolean
  value: () => IText
  caret: () => ISymbolPosition
  currentSymbol: () => string
  caretPosition: () => { left: string; top: string }
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
