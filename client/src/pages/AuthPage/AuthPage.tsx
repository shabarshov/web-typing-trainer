import React from "react"
import type { FC } from "react"

import Modal from "components/UI/Modal/Modal"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"

import { Link } from "react-router-dom"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  return (
    <Modal>
      <AuthContainer>
        <h1 className={styles.title}>Authorization</h1>
        <AuthInput title="username" />
        <AuthInput title="password" type="password" />
        <button className={styles.submitBtn}>Submit</button>
        <span className={styles.text}>
          Don&apos;t have an account?{" "}
          <Link className={styles.switchLink} to="../signUp">
            Sign Up
          </Link>
        </span>
      </AuthContainer>
    </Modal>
  )
}

export default AuthPage
