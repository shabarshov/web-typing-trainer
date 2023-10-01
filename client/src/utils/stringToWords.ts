const stringToWords = (str: string): string[] => {
  const text: string[] = str.split(" ")
  const lastIndex: number = text.length

  const result: string[] = text.map((word, index) => {
    if (index !== lastIndex) return word + " "
    return word
  })

  return result
}

export default stringToWords
