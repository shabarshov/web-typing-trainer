import getTextRowLengths from "./getTextRowLengths"
import type { ICaretPosition, IText } from "./types"

const calculateCaretPosition = (
  text: IText,
  countOfComplitedSymbols: number,
  symbolWidth: number,
  symbolHeight: number,
): { caretPosition: ICaretPosition; currentRow: number } => {
  const rowLengths = getTextRowLengths(text.text, symbolWidth)

  let xStep = 0
  let yStep = 0
  let rowCounter = 0

  for (let i = 0; i < countOfComplitedSymbols; i++) {
    xStep += symbolWidth
    if (xStep >= rowLengths[rowCounter]) {
      yStep += symbolHeight
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
