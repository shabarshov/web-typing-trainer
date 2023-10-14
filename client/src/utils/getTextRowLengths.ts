import createCounter from "./createCounter"
import stringToWords from "./stringToWords"

import { SYMBOL_WIDTH, TEXT_WRAPPER_MARGIN } from "constants/sizes"

const getTextRowLengths = (initialText: string): number[] => {
  const currentSize = createCounter()
  const rowLengths: number[] = []

  stringToWords(initialText).map((value) => {
    currentSize.increment(value.length * SYMBOL_WIDTH)

    if (currentSize.getValue() > window.innerWidth - 2 * TEXT_WRAPPER_MARGIN) {
      rowLengths.push(currentSize.getValue() - value.length * SYMBOL_WIDTH)
      currentSize.set(value.length * SYMBOL_WIDTH)
    }
  })

  rowLengths.push(currentSize.getValue())

  return rowLengths
}

export default getTextRowLengths
