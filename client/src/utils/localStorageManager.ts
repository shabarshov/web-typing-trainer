const localStorageManager = () => {
  const setData = <T>(key: string, value: T): void => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  const getData = <T>(key: string, initialValue: T): T => {
    const value = window.localStorage.getItem(key)

    if (value) return JSON.parse(value) as T
    return initialValue
  }

  const removeData = (key: string): void => {
    window.localStorage.removeItem(key)
  }

  const clearData = (): void => {
    window.localStorage.clear()
  }

  return { setData, getData, removeData, clearData }
}

export default localStorageManager
