import React, { useState } from "react"
import type { FC } from "react"

import type { ModalProps } from "./ModalProps"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import { useMutation } from "react-query"
import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setUserId } from "store"

import styles from "./styles.module.scss"

const DeleteModal: FC<ModalProps> = ({ setIsVisible }) => {
  const [value, setValue] = useState<string>("")
  const userId = useAppSelector((store) => store.settings.account.userId)
  const dispatch = useAppDispatch()

  const { mutate } = useMutation({
    mutationFn: async () => {
      const data = await fetch("api/settings/delete/", {
        method: "DELETE",
        body: JSON.stringify({
          user_id: userId,
          password: value,
        }),
        headers: { "content-type": "application/json" },
      })

      if (data.status === 200) {
        dispatch(setUserId("undefined"))
        setIsVisible(false)
      }
    },
  })

  const closeClickHandler = () => {
    setIsVisible(false)
  }

  const deleteClickHandler = () => {
    if (value) mutate()
    else console.log("the password field should not be empty")
  }

  return (
    <Modal>
      <AuthContainer className={styles.container}>
        <Text
          className={styles.title}
          value={
            "If you delete your account, you will not be able to restore it. All your progress will be lost!"
          }
        />

        <Button className={styles.closeButton} onClick={closeClickHandler}>
          <CloseIcon />
        </Button>

        <AuthInput
          title={"password"}
          state={value}
          setState={setValue}
          type="password"
        />

        <Button className={styles.submitBtn} onClick={deleteClickHandler}>
          <Text className={styles.text} value={"Delete"} />
        </Button>
      </AuthContainer>
    </Modal>
  )
}

export default DeleteModal
