import React from "react"
import type { FC } from "react"

import { Input, Text } from "components/UI"

import type { AuthInputProps } from "./AuthInputProps"

import styles from "./AuthInput.module.scss"

const AuthInput: FC<AuthInputProps> = ({
  state,
  setState,
  title = "",
  placeholder,
  type = "text",
}) => {
  return (
    <div className={styles.container}>
      <Text className={styles.title} value={title} textCase="upper" />
      <Input
        value={state}
        onChange={(event) => setState(event.target.value)}
        className={styles.input}
        placeholder={placeholder}
        spellCheck={false}
        type={type}
      />
    </div>
  )
}

export default AuthInput
