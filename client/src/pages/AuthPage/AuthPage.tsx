import type { FC } from "react"
import React from "react"
import AuthModal from "components/AuthModal/AuthModal"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  return (
    <div className={styles.container}>
      <AuthModal />
    </div>
  )
}

export default AuthPage
