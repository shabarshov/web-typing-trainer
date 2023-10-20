import getTextRowLengths from "./getTextRowLengths"
import type { ICaretPosition, IText } from "./types"

import { SYMBOL_HEIGHT, SYMBOL_WIDTH } from "constants/sizes"

const calculateCaretPosition = (
  text: IText,
  countOfComplitedSymbols: number,
): { caretPosition: ICaretPosition; currentRow: number } => {
  const rowLengths = getTextRowLengths(text.text)

  let xStep = 0
  let yStep = 0
  let rowCounter = 0

  for (let i = 0; i < countOfComplitedSymbols; i++) {
    xStep += SYMBOL_WIDTH
    if (xStep >= rowLengths[rowCounter]) {
      yStep += SYMBOL_HEIGHT
      xStep = 0
      rowCounter += 1
    }
  }

  return {
    caretPosition: { left: xStep, top: yStep },
    currentRow: rowCounter,
  }
}

export default calculateCaretPosition
