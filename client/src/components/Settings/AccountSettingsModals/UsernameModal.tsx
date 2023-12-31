import React, { useState } from "react"
import type { FC } from "react"

import type { ModalProps } from "./ModalProps"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import { useTranslation } from "react-i18next"
import { useMutation } from "react-query"
import { useAppSelector } from "hooks/storeHooks"

import { toast } from "react-toastify"

import styles from "./styles.module.scss"

const UsernameModal: FC<ModalProps> = ({ setIsVisible }) => {
  const { t } = useTranslation()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const userId = useAppSelector((store) => store.settings.account.userId)
  const currentUsername = useAppSelector(
    (store) => store.settings.account.username,
  )

  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = await fetch("api/settings/username/", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          login: username,
          password: password,
        }),
        headers: { "content-type": "application/json" },
      })

      if (data.status === 200) {
        toast.success(t("The username has been changed"))
        setIsVisible(false)
      }

      if (data.status === 501) {
        toast.error(t("Server error"))
      }
    },
  })

  const closeClickHandler = () => {
    setIsVisible(false)
  }

  const deleteClickHandler = () => {
    if (!username) {
      toast.error(t("emptyUsernameWarning"))
    }

    if (!password) {
      toast.error(t("emptyPasswordWarning"))
    }

    if (username === currentUsername) {
      toast.error(
        t("The new username must be different from the current username"),
      )
      return
    }

    mutate()
  }

  return (
    <Modal>
      <AuthContainer className={styles.container}>
        <Text className={styles.title} value={t("usernameWarning")} />

        <Button className={styles.closeButton} onClick={closeClickHandler}>
          <CloseIcon />
        </Button>

        <AuthInput
          title={t("new username")}
          state={username}
          setState={setUsername}
          type="text"
        />

        <AuthInput
          title={t("Password")}
          state={password}
          setState={setPassword}
          type="password"
        />

        <Button className={styles.submitBtn} onClick={deleteClickHandler}>
          <Text className={styles.text} value={t("Update")} />
        </Button>
      </AuthContainer>
    </Modal>
  )
}

export default UsernameModal
