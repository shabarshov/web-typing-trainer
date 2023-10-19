import type {
  IText,
  ITextWrapper,
  ISymbolPosition,
  ICaretPosition,
} from "utils/types"
import { getTextRowLengths, initText, calculateCaretPosition } from "utils"

const textWrapper = (initialText: string): ITextWrapper => {
  const text: IText = initText(initialText)
  const currentSymbolPosition: ISymbolPosition = { w: 0, s: 0 }

  // the last word has a space at the end
  const textLength = text.reduce((acc, word) => acc + word.length, -1)

  let countOfMistakes = 0
  let isEnd = false
  let countOfComplitedSymbols = 0

  const next = (error = false): boolean => {
    if (isEnd) return true
    countOfComplitedSymbols += 1

    if (!error)
      text[currentSymbolPosition.w][currentSymbolPosition.s].state = "complited"
    else {
      text[currentSymbolPosition.w][currentSymbolPosition.s].state = "error"
      countOfMistakes += 1
    }

    if (text[currentSymbolPosition.w].length - 1 === currentSymbolPosition.s) {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      text[currentSymbolPosition.w].isComplited = true
      currentSymbolPosition.w += 1
      text[currentSymbolPosition.w].isComplited = 0
      currentSymbolPosition.s = 0
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true
    } else {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      currentSymbolPosition.s += 1
      text[currentSymbolPosition.w].isComplited = currentSymbolPosition.s
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true
    }

    if (
      text.length - 1 === currentSymbolPosition.w &&
      text[currentSymbolPosition.w].length - 1 === currentSymbolPosition.s
    ) {
      isEnd = true
      return true
    }

    return false
  }

  const prev = (): void => {
    if (isEnd) return

    if (currentSymbolPosition.w === 0 && currentSymbolPosition.s === 0) {
      return
    }

    countOfComplitedSymbols -= 1

    if (currentSymbolPosition.s === 0) {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      text[currentSymbolPosition.w].isComplited = false
      currentSymbolPosition.w -= 1
      currentSymbolPosition.s = text[currentSymbolPosition.w].length - 1
      text[currentSymbolPosition.w].isComplited = currentSymbolPosition.s
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true
    } else {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      currentSymbolPosition.s -= 1
      text[currentSymbolPosition.w].isComplited = currentSymbolPosition.s
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true
    }

    if (
      text[currentSymbolPosition.w][currentSymbolPosition.s].state === "error"
    ) {
      countOfMistakes -= 1
    }

    text[currentSymbolPosition.w][currentSymbolPosition.s].state = "uncomplited"
  }

  const value = (): IText => {
    return text
  }

  const getCurrentSymbol = (): string => {
    return text[currentSymbolPosition.w][currentSymbolPosition.s].value
  }

  const getCountOfIncorrect = (): number => {
    return countOfMistakes
  }

  const getCountOfCorrect = (): number => {
    return textLength - countOfMistakes
  }

  const getTextLength = (): number => {
    return textLength
  }

  const getCaretPosition = (): ICaretPosition => {
    return calculateCaretPosition(text, countOfComplitedSymbols).caretPosition
  }

  const getCurrentRow = (): number => {
    return calculateCaretPosition(text, countOfComplitedSymbols).currentRow
  }

  const getCountOfRows = (): number => {
    return getTextRowLengths(text.text).length
  }

  const getCountOfComplitedSymbols = (): number => {
    return countOfComplitedSymbols
  }

  return {
    next: next,
    prev: prev,
    value: value,
    currentSymbol: getCurrentSymbol,
    caretPosition: getCaretPosition,
    countOfCorrect: getCountOfCorrect,
    countOfIncorrect: getCountOfIncorrect,
    textLength: getTextLength,
    currentRow: getCurrentRow,
    countOfRows: getCountOfRows,
    countOfComplitedSymbols: getCountOfComplitedSymbols,
  } as ITextWrapper
}

export default textWrapper
