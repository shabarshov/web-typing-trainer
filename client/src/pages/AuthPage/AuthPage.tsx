import React, { useState } from "react"
import type { FC } from "react"

import Modal from "components/UI/Modal/Modal"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"
import Text from "components/UI/Text/Text"
import Button from "components/UI/Button/Button"

import CloseIcon from "assets/svg/Auth/CloseIcon"

import { NavLink } from "react-router-dom"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(
    window.location.href.split("/").pop() === "signIn",
  )

  return (
    <Modal>
      <AuthContainer>
        <NavLink className={styles.closeButton} to="../">
          <CloseIcon />
        </NavLink>
        <Text
          className={styles.title}
          value={isSignIn ? "Authorization" : "Registration"}
        />

        <AuthInput title="username" />
        <AuthInput title="password" type="password" />
        {!isSignIn ? (
          <AuthInput title="confirm password" type="password" />
        ) : (
          <></>
        )}

        <Button className={styles.submitBtn}>
          <Text className={styles.text} value="Submit" />
        </Button>

        <div>
          <Text
            className={styles.text}
            value={
              isSignIn ? "Don't have an account? " : "Already have an account? "
            }
          />
          <Button onClick={() => setIsSignIn(!isSignIn)}>
            <NavLink
              className={styles.switchLink}
              to={isSignIn ? "../signUp" : "../signIn"}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </NavLink>
          </Button>
        </div>
      </AuthContainer>
    </Modal>
  )
}

export default AuthPage
