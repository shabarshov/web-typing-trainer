import type { FC } from "react"
import React, { useEffect } from "react"

import AppRoutes from "components/AppRoutes/AppRoutes"
import WrapperContainer from "components/containers/WrapperContainer/WrapperContainer"
import NavBar from "components/NavBar/NavBar"

import { useAppDispatch } from "hooks/storeHooks"

import { close as accountClose } from "store/accountSettings"
import { close as caretClose } from "store/caretSettings"
import { close as fontClose } from "store/fontSettings"
import { close as soundsClose } from "store/soundsSettings"
import { close as themeClose } from "store/themeSettings"
import { close as workspaceClose } from "store/workspaceSettings"

import styles from "./App.module.scss"

const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const windowBeforeUnloadHandler = () => {
      const closeCallbacks = [
        accountClose,
        caretClose,
        fontClose,
        soundsClose,
        themeClose,
        workspaceClose,
      ]

      closeCallbacks.map((callback) => {
        dispatch(callback())
      })
    }

    window.addEventListener("beforeunload", windowBeforeUnloadHandler)

    return () => {
      window.removeEventListener("beforeunload", windowBeforeUnloadHandler)
    }
  }, [])

  return (
    <div className={styles.container}>
      <WrapperContainer>
        <NavBar />
        <AppRoutes className={styles.page} />
      </WrapperContainer>
    </div>
  )
}

export default App
