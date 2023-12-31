import React, { useEffect, useState } from "react"
import type { FC } from "react"

import { useMutation } from "react-query"
import { NavLink } from "react-router-dom"

import { useTranslation } from "react-i18next"
import { useAppDispatch } from "hooks/storeHooks"
import * as reducers from "store"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"

import { toast } from "react-toastify"

import { fetchUser } from "utils"

import styles from "./AuthPage.module.scss"

const AuthPage: FC = () => {
  const { t } = useTranslation()
  const [isSignIn, setIsSignIn] = useState<boolean>(true)

  const dispatch = useAppDispatch()

  const [login, setLogin] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  useEffect(() => {
    dispatch(reducers.setUserId("undefined"))
  }, [])

  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetchUser(
        isSignIn ? "signIn" : "signUp",
        login,
        password,
      )

      const data = await res.json()
      console.log(data.user_id)
      if (data.user_id) {
        toast.success(
          (isSignIn ? t("Authorization") : t("Registration")) +
            " " +
            t("Success"),
        )
        dispatch(reducers.setUserId(`${data.user_id}`))
        dispatch(reducers.setUsername(login))
        dispatch(reducers.setPassword(password))
      }
    },
  })

  const buttonClickHandler = () => {
    // for both forms
    if (!login) {
      toast.error(t("emptyUsernameWarning"))
      return
    }

    if (!password) {
      toast.error(t("emptyPasswordWarning"))
      return
    }

    // only for signUp form
    if (!isSignIn) {
      if (!confirmPassword) {
        toast.error(t("emptyConfirmWarning"))
        return
      }

      if (password !== confirmPassword) {
        toast.error(t("Passwords don't match"))
        return
      }

      if (password.length < 5) {
        toast.error(t("shortWarning"))
        return
      }
    }

    mutate()
  }

  return (
    <Modal>
      <AuthContainer>
        <Text
          className={styles.title}
          value={isSignIn ? t("Authorization") : t("Registration")}
        />

        <AuthInput title={t("Username")} state={login} setState={setLogin} />
        <AuthInput
          title={t("Password")}
          type="password"
          state={password}
          setState={setPassword}
        />
        {!isSignIn ? (
          <AuthInput
            title={t("Confirm password")}
            type="password"
            state={confirmPassword}
            setState={setConfirmPassword}
          />
        ) : (
          <></>
        )}

        <Button className={styles.submitBtn} onClick={buttonClickHandler}>
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
