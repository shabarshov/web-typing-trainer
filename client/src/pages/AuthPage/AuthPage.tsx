import React, { useState, useEffect } from "react"
import type { FC } from "react"

import { useMutation } from "react-query"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "hooks/storeHooks"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"

import { fetchUser } from "utils"

import CloseIcon from "assets/svg/Auth/CloseIcon"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(
    window.location.href.split("/").pop() === "signIn",
  )

  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const { mutate } = useMutation({
    mutationFn: () =>
      fetchUser(isSignIn ? "signIn" : "signUp", login, password),
  })

  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  return (
    <Modal>
      <AuthContainer>
        <NavLink className={styles.closeButton} to="../">
          <CloseIcon />
        </NavLink>
        <Text
          className={styles.title}
          value={
            isSignIn
              ? language === "eng"
                ? "Authorization"
                : "Авторизация"
              : language === "eng"
              ? "Registration"
              : "Регистрация"
          }
        />

        <AuthInput
          title={language === "eng" ? "username" : "логин"}
          state={login}
          setState={setLogin}
        />
        <AuthInput
          title={language === "eng" ? "password" : "пароль"}
          type="password"
          state={password}
          setState={setPassword}
        />
        {!isSignIn ? (
          <AuthInput
            title={
              language === "eng" ? "confirm password" : "подтвердите пароль"
            }
            type="password"
            state={confirmPassword}
            setState={setConfirmPassword}
          />
        ) : (
          <></>
        )}

        <Button className={styles.submitBtn} onClick={() => mutate()}>
          <Text
            className={styles.text}
            value={language === "eng" ? "Submit" : "Продолжить"}
          />
        </Button>

        <div>
          <Text
            className={styles.text}
            value={
              isSignIn
                ? language === "eng"
                  ? "Don't have an account? "
                  : "У вас ещё нет аккаунта? "
                : language === "eng"
                ? "Already have an account? "
                : "У вас уже есть аккаунт? "
            }
          />
          <Button onClick={() => setIsSignIn(!isSignIn)}>
            <NavLink
              className={styles.switchLink}
              to={isSignIn ? "../signUp" : "../signIn"}
            >
              {isSignIn
                ? language === "eng"
                  ? "Sign Up"
                  : "Регистрация"
                : language === "eng"
                ? "Sign In"
                : "Войти"}
            </NavLink>
          </Button>
        </div>
      </AuthContainer>
    </Modal>
  )
}

export default AuthPage
