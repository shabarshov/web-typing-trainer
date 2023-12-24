import { useEffect } from "react"
import { localStorageManager } from "utils"
import { useAppSelector } from "hooks/storeHooks"

import type { IParsedStore } from "./types"

const useSaveSettings = () => {
  const settings = useAppSelector((state) => state.settings)
  const avatar = useAppSelector((state) => state.avatar)
  const { setData } = localStorageManager()

  useEffect(() => {
    const windowBeforeUnloadHandler = () => {
      const parsedSettings = Object.values(settings).reduce((acc, value) => {
        return { ...value, ...acc }
      }, {}) as IParsedStore

      for (const key in parsedSettings) {
        if (Object.prototype.hasOwnProperty.call(parsedSettings, key)) {
          setData(key, parsedSettings[key])
        }
      }

      setData("src", avatar.src)
    }

    window.addEventListener("beforeunload", windowBeforeUnloadHandler)

    return () => {
      window.removeEventListener("beforeunload", windowBeforeUnloadHandler)
    }
  }, [settings, avatar])
}

export default useSaveSettings
