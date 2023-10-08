import createCounter from "./createCounter"
import stringToWords from "./stringToWords"

import { SYMBOL_WIDTH, TEXT_WRAPPER_SIZE } from "constants/sizes"

const getTextRowLengths = (initialText: string): number[] => {
  const currentSize = createCounter()
  const rowLengths: number[] = []

  stringToWords(initialText).map((value) => {
    currentSize.increment(value.length * SYMBOL_WIDTH)

    if (currentSize.getValue() > TEXT_WRAPPER_SIZE) {
      rowLengths.push(currentSize.getValue() - value.length * SYMBOL_WIDTH)
      currentSize.set(value.length * SYMBOL_WIDTH)
    }
  })

  return rowLengths
}

export default getTextRowLengths
