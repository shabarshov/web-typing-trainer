import React, { useState } from "react"
import type { FC } from "react"

import { NavLink } from "react-router-dom"

import { useTranslation } from "react-i18next"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"

import CloseIcon from "assets/svg/Auth/CloseIcon"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  const { t } = useTranslation()

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
          value={isSignIn ? t("Authorization") : t("Registration")}
        />

        <AuthInput title={t("Username")} />
        <AuthInput title={t("Password")} type="password" />
        {!isSignIn ? (
          <AuthInput title={t("Confirm password")} type="password" />
        ) : (
          <></>
        )}

        <Button className={styles.submitBtn}>
          <Text className={styles.text} value={t("Submit")} />
        </Button>

        <div>
          <Text
            className={styles.text}
            value={
              isSignIn
                ? t("Don't have an account? ")
                : t("Already have an account? ")
            }
          />
          <Button onClick={() => setIsSignIn(!isSignIn)}>
            <NavLink
              className={styles.switchLink}
              to={isSignIn ? "../signUp" : "../signIn"}
            >
              {isSignIn ? t("Sign Up") : t("Sign In")}
            </NavLink>
          </Button>
        </div>
      </AuthContainer>
    </Modal>
  )
}

export default AuthPage
