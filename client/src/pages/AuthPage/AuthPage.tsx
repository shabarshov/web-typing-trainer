import React, { FC } from "react"
import AuthModal from "components/AuthModal/AuthModal"

import styles from "./AuthPage.module.scss"

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  return (
    <div className={styles.container}>
      <AuthModal />
    </div>
  )
}

export default AuthPage
