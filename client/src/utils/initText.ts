import type { IText, IWord, ISymbol } from "utils/types"

const initText = (initialText: string): IText => {
  const initialWords = initialText.split(" ").map((value, index) => {
    if (index !== initialText.length - 1) return value + " "
    return value
  })

  const result = initialWords.map((wordValue, wordIndex) => {
    const word = wordValue.split("").map((symbolValue, symbolIndex) => {
      if (symbolIndex === 0 && wordIndex === 0) {
        return {
          value: symbolValue,
          state: "current",
        } as ISymbol
      }

      return {
        value: symbolValue,
        state: "uncomplited",
      } as ISymbol
    }) as unknown as IWord

    word.isComplited = wordIndex === 0 ? 0 : false

    return word
  }) as unknown as IText

  result.text = initialText
  return result
}

export default initText
