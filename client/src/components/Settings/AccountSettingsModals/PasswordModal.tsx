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

import { setUserId } from "store"

import { toast } from "react-toastify"

import styles from "./styles.module.scss"

const PasswordModal: FC<ModalProps> = ({ setIsVisible }) => {
  const { t } = useTranslation()

  const [oldPassword, setOldPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")

  const currentPassword = useAppSelector(
    (store) => store.settings.account.password,
  )
  const userId = useAppSelector((store) => store.settings.account.userId)
  const dispatch = useAppDispatch()

  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = await fetch("api/settings/password/", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          old_password: oldPassword,
          new_password: newPassword,
        }),
        headers: { "content-type": "application/json" },
      })

      if (data.status === 200) {
        toast.success("The password has been changed")
        dispatch(setUserId("undefined"))
        setIsVisible(false)
      }

      if (data.status === 501) {
        toast.error("Server error")
      }
    },
  })

  const closeClickHandler = () => {
    setIsVisible(false)
  }

  const passwordClickHandler = () => {
    if (!oldPassword) {
      toast.error("The password field should not be empty")
      return
    }

    if (!newPassword) {
      toast.error("The new password field should not be empty")
      return
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords don't match")
      return
    }

    if (newPassword.length < 5) {
      toast.error("The new password is too short (need 5+ symbols)")

      return
    }

    if (newPassword === currentPassword) {
      toast.error(
        "The new password must be different from the current password",
      )
      return
    }

    mutate()
  }

  return (
    <Modal>
      <AuthContainer className={styles.container}>
        <Text className={styles.title} value={t("passwordWarning")} />

        <Button className={styles.closeButton} onClick={closeClickHandler}>
          <CloseIcon />
        </Button>

        <AuthInput
          title={t("current password")}
          state={oldPassword}
          setState={setOldPassword}
          type="password"
        />

        <AuthInput
          title={t("new password")}
          state={newPassword}
          setState={setNewPassword}
          type="password"
        />

        <AuthInput
          title={t("confirm new password")}
          state={confirmNewPassword}
          setState={setConfirmNewPassword}
          type="password"
        />

        <Button className={styles.submitBtn} onClick={passwordClickHandler}>
          <Text className={styles.text} value={t("Update")} />
        </Button>
      </AuthContainer>
    </Modal>
  )
}

export default PasswordModal
