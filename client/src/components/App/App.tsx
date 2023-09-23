import type { FC } from "react"
import React from "react"

import AppRoutes from "components/AppRoutes/AppRoutes"
import Wrapper from "../Wrapper/Wrapper"

import styles from "./App.module.scss"

const App: FC = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </div>
  )
}

export default App
