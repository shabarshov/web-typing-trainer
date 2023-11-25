import createCounter from "./createCounter"
import stringToWords from "./stringToWords"

import { TEXT_WRAPPER_MARGIN } from "constants/sizes"

const getTextRowLengths = (
  initialText: string,
  symbolWidth: number,
): number[] => {
  const currentSize = createCounter()
  const rowLengths: number[] = []

  stringToWords(initialText).map((value) => {
    currentSize.increment(value.length * symbolWidth)

    if (currentSize.getValue() > window.innerWidth - 2 * TEXT_WRAPPER_MARGIN) {
      rowLengths.push(currentSize.getValue() - value.length * symbolWidth)
      currentSize.set(value.length * symbolWidth)
    }
  })

  rowLengths.push(currentSize.getValue())

  return rowLengths
}

export default getTextRowLengths
