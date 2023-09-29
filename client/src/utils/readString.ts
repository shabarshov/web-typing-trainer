const readString = (str: string) => {
  function* generator(str: string): Generator<string, void, number> {
    for (let i = 0; i < str.length; i++) {
      yield str[i]
    }
  }

  const iterator = generator(str)
  let current = iterator.next()

  return {
    next: () => {
      current = iterator.next()
    },

    current: () => {
      return current
    },
  }
}

export default readString
