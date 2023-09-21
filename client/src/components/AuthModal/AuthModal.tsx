import React, { FC } from "react"
import styles from "./AuthModal.module.scss"

import { Link } from "react-router-dom"

import AuthInput from "components/AuthInput/AuthInput"

interface AuthModalProps {}

const AuthModal: FC<AuthModalProps> = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Authorization</header>

      <AuthInput
        title="username"
        placeholder="VadimSex228"
      />
      <AuthInput
        title={"password"}
        placeholder="12345"
      />

      <footer className={styles.footer}>
        <div className={styles.btnWrapper}>
          <button className={styles.submitBtn}>Submit</button>
        </div>
        <div>
          <span>Don't have an account? </span>
          <Link
            className={styles.switchLink}
            to="../auth/signUp"
          >
            Sign Up
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default AuthModal
