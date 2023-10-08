import type {
  IText,
  ITextWrapper,
  ISymbolPosition,
  ICaretPosition,
} from "utils/types"
import { getTextRowLengths, initText } from "utils"
import { SYMBOL_WIDTH, SYMBOL_HEIGHT } from "constants/sizes"

const textWrapper = (
  initialText: string,
  initialCaretPosition: ICaretPosition,
): ITextWrapper => {
  const text: IText = initText(initialText)
  const currentSymbolPosition: ISymbolPosition = { w: 0, s: 0 }
  const rowLengths: number[] = getTextRowLengths(text.text)
  const caretPosition = initialCaretPosition

  // the last word has a space at the end
  const textLength = text.reduce((acc, word) => acc + word.length, -1)

  let countOfMistakes = 0
  let currentRow = 0
  let isEnd = false

  const next = (error = false): boolean => {
    if (isEnd) return true
    let stepX = SYMBOL_WIDTH
    let stepY = 0

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

      if (stepX + caretPosition.left === rowLengths[currentRow]) {
        stepX -= rowLengths[currentRow]
        stepY = SYMBOL_HEIGHT
        currentRow += 1
      }
    } else {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      currentSymbolPosition.s += 1
      text[currentSymbolPosition.w].isComplited = currentSymbolPosition.s
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true
    }

    caretPosition.left += stepX
    caretPosition.top += stepY

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

    let stepX = -SYMBOL_WIDTH
    let stepY = 0

    if (currentSymbolPosition.w === 0 && currentSymbolPosition.s === 0) {
      return
    }

    if (currentSymbolPosition.s === 0) {
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = false
      text[currentSymbolPosition.w].isComplited = false
      currentSymbolPosition.w -= 1
      currentSymbolPosition.s = text[currentSymbolPosition.w].length - 1
      text[currentSymbolPosition.w].isComplited = currentSymbolPosition.s
      text[currentSymbolPosition.w][currentSymbolPosition.s].isCurrent = true

      if (caretPosition.left === 0) {
        currentRow -= 1
        stepX += rowLengths[currentRow]
        stepY = -SYMBOL_HEIGHT
      }
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

    caretPosition.left += stepX
    caretPosition.top += stepY
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
    return { ...caretPosition }
  }

  const getCurrentRow = (): number => {
    return currentRow
  }

  const getCountOfRows = (): number => {
    return rowLengths.length
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
  } as ITextWrapper
}

export default textWrapper
