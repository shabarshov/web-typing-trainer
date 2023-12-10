import React, { useState } from "react"
import type { FC } from "react"

import type { ModalProps } from "./ModalProps"

import { Modal, Text, Button } from "components/UI"
import AuthContainer from "components/containers/AuthContainer/AuthContainer"
import AuthInput from "components/AuthInput/AuthInput"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import { useMutation } from "react-query"
import { useAppSelector } from "hooks/storeHooks"

import styles from "./styles.module.scss"

const UsernameModal: FC<ModalProps> = ({ setIsVisible }) => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const userId = useAppSelector((store) => store.settings.account.userId)

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
        setIsVisible(false)
      }
    },
  })

  const closeClickHandler = () => {
    setIsVisible(false)
  }

  const deleteClickHandler = () => {
    if (username && password) mutate()
    else console.log("the login and password fields should not be empty")
  }

  return (
    <Modal>
      <AuthContainer className={styles.container}>
        <Text
          className={styles.title}
          value={
            "After changing your username, your old username will be released and any other user will be able to use it!"
          }
        />

        <Button className={styles.closeButton} onClick={closeClickHandler}>
          <CloseIcon />
        </Button>

        <AuthInput
          title={"new username"}
          state={username}
          setState={setUsername}
          type="text"
        />

        <AuthInput
          title={"password"}
          state={password}
          setState={setPassword}
          type="password"
        />

        <Button className={styles.submitBtn} onClick={deleteClickHandler}>
          <Text className={styles.text} value={"Update"} />
        </Button>
      </AuthContainer>
    </Modal>
  )
}

export default UsernameModal
