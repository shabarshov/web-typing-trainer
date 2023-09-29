const createCounter = (initialValue?: number) => {
  let currentValue = initialValue || 0

  return {
    increment: (value?: number) => {
      currentValue += value || 1
    },

    decrement: (value?: number) => {
      currentValue -= value || 1
    },

    reset: () => {
      currentValue = initialValue || 0
    },

    set: (value: number) => {
      currentValue = value
    },

    getValue: () => {
      return currentValue
    },
  }
}

export default createCounter
