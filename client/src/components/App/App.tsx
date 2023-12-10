import { FC, useEffect } from "react"
import React from "react"

import { useTranslation } from "react-i18next"

import AppRoutes from "components/AppRoutes/AppRoutes"
import WrapperContainer from "components/containers/WrapperContainer/WrapperContainer"
import NavBar from "components/NavBar/NavBar"

import useSaveSettings from "hooks/useSaveSettings"

import styles from "./App.module.scss"
import { useAppSelector } from "hooks/storeHooks"
import i18next from "i18next"

const App: FC = () => {
  const state = useAppSelector(
    (state) => state.settings.workspace.interfaceLanguage,
  )
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(state)
  }, [state])

  useSaveSettings()

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
