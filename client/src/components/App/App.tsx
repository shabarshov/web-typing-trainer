import type { FC } from "react"
import React from "react"

import AppRoutes from "components/AppRoutes/AppRoutes"
import WrapperContainer from "components/containers/WrapperContainer/WrapperContainer"
import NavBar from "components/NavBar/NavBar"

import styles from "./App.module.scss"

const App: FC = () => {
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
