import React, { FC } from "react"

import AppRoutes from "components/AppRoutes/AppRoutes"
import Wrapper from "../Wrapper/Wrapper"

import styles from "./App.module.scss"

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </div>
  )
}

export default App
