import { useEffect } from "react"
import { localStorageManager } from "utils"
import { useAppSelector } from "hooks/storeHooks"

import type { IParsedStore } from "./types"

const useSaveSettings = () => {
  const store = useAppSelector((state) => state.settings)
  const { setData } = localStorageManager()

  useEffect(() => {
    const windowBeforeUnloadHandler = () => {
      const parsedStore = Object.values(store).reduce((acc, value) => {
        return { ...value, ...acc }
      }, {}) as IParsedStore

      for (const key in parsedStore) {
        if (Object.prototype.hasOwnProperty.call(parsedStore, key)) {
          setData(key, parsedStore[key])
        }
      }
    }

    window.addEventListener("beforeunload", windowBeforeUnloadHandler)

    return () => {
      window.removeEventListener("beforeunload", windowBeforeUnloadHandler)
    }
  }, [store])
}

export default useSaveSettings
