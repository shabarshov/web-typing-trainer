import type {
  IText,
  ITextWrapper,
  ISymbolPosition,
  ICaretPosition,
} from "utils/types"
import { getCaretPosition, getTextRowLengths, initText } from "utils"
import { SYMBOL_WIDTH, SYMBOL_HEIGHT } from "constants/index"

const textWrapper = (
  initialText: string,
  initialCaretPosition: ICaretPosition,
): ITextWrapper => {
  const text: IText = initText(initialText)
  const currentSymbol: ISymbolPosition = { w: 0, s: 0 }
  const rowLengths: number[] = getTextRowLengths(text.text)
  const caretPosition = initialCaretPosition
  let currentRow = 0

  const next = function (): boolean {
    let stepX = SYMBOL_WIDTH
    let stepY = 0

    if (
      text.length - 1 === currentSymbol.w &&
      text[currentSymbol.w].length - 1 === currentSymbol.s
    ) {
      return false
    }

    text[currentSymbol.w][currentSymbol.s].state = "complited"
    if (text[currentSymbol.w].length - 1 === currentSymbol.s) {
      text[currentSymbol.w].isComplited = true
      currentSymbol.w += 1
      text[currentSymbol.w].isComplited = 0
      currentSymbol.s = 0
      text[currentSymbol.w][currentSymbol.s].state = "current"

      if (stepX + caretPosition.left === rowLengths[currentRow]) {
        stepX -= rowLengths[currentRow]
        stepY = SYMBOL_HEIGHT
        currentRow += 1
      }
    } else {
      currentSymbol.s += 1
      text[currentSymbol.w].isComplited = currentSymbol.s
      text[currentSymbol.w][currentSymbol.s].state = "current"
    }

    caretPosition.left += stepX
    caretPosition.top += stepY
    return true
  }

  const prev = function (): boolean {
    let stepX = -SYMBOL_WIDTH
    let stepY = 0

    if (currentSymbol.w === 0 && currentSymbol.s === 0) {
      return false
    }

    text[currentSymbol.w][currentSymbol.s].state = "uncomplited"
    if (currentSymbol.s === 0) {
      text[currentSymbol.w].isComplited = false
      currentSymbol.w -= 1
      currentSymbol.s = text[currentSymbol.w].length - 1
      text[currentSymbol.w].isComplited = currentSymbol.s
      text[currentSymbol.w][currentSymbol.s].state = "current"

      if (caretPosition.left === 0) {
        currentRow -= 1
        stepX += rowLengths[currentRow]
        stepY = -SYMBOL_HEIGHT
      }
    } else {
      currentSymbol.s -= 1
      text[currentSymbol.w].isComplited = currentSymbol.s
      text[currentSymbol.w][currentSymbol.s].state = "current"
    }

    caretPosition.left += stepX
    caretPosition.top += stepY

    return true
  }

  const value = function value(): IText {
    return text
  }

  const caret = function (): ISymbolPosition {
    return currentSymbol
  }

  const currentSymbolValue = function (): string {
    return text[currentSymbol.w][currentSymbol.s].value
  }

  return {
    next: next,
    prev: prev,
    value: value,
    caret: caret,
    currentSymbol: currentSymbolValue,
    caretPosition: () =>
      getCaretPosition(caretPosition.left, caretPosition.top),
  } as ITextWrapper
}

export default textWrapper
