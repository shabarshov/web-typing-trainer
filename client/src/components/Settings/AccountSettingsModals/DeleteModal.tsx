import React, { useState } from "react"
import type { FC } from "react"

import type { ModalProps } from "./ModalProps"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import { useTranslation } from "react-i18next"
import { useMutation } from "react-query"
import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setUserId, setUsername, setPassword } from "store"

import styles from "./styles.module.scss"

const DeleteModal: FC<ModalProps> = ({ setIsVisible }) => {
  const { t } = useTranslation()

  const [currentPassword, setCurrentPassword] = useState<string>("")
  const userId = useAppSelector((store) => store.settings.account.userId)
  const dispatch = useAppDispatch()

  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = await fetch("api/settings/delete/", {
        method: "DELETE",
        body: JSON.stringify({
          user_id: userId,
          password: currentPassword,
        }),
        headers: { "content-type": "application/json" },
      })

      if (data.status === 200) {
        dispatch(setUserId("undefined"))
        dispatch(setUsername("undefined"))
        dispatch(setPassword("undefined"))
        setIsVisible(false)
      }
    },
  })

  const closeClickHandler = () => {
    setIsVisible(false)
  }

  const deleteClickHandler = () => {
    if (!currentPassword) {
      console.log("the password field should not be empty")
      return
    }

    mutate()
  }

  return (
    <Modal>
      <AuthContainer className={styles.container}>
        <Text className={styles.title} value={t("deleteWarning")} />

        <Button className={styles.closeButton} onClick={closeClickHandler}>
          <CloseIcon />
        </Button>

        <AuthInput
          title={t("Password")}
          state={currentPassword}
          setState={setCurrentPassword}
          type="password"
        />

        <Button className={styles.submitBtn} onClick={deleteClickHandler}>
          <Text className={styles.text} value={t("Delete")} />
        </Button>
      </AuthContainer>
    </Modal>
  )
}

export default DeleteModal
