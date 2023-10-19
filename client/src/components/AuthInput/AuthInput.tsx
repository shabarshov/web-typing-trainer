import React from "react"
import type { FC } from "react"

import Input from "components/UI/Input/Input"
import Text from "components/UI/Text/Text"

import type { AuthInputProps } from "./AuthInputProps"

import styles from "./AuthInput.module.scss"

const AuthInput: FC<AuthInputProps> = ({
  title = "",
  placeholder,
  type = "text",
}) => {
  return (
    <div className={styles.container}>
      <Text className={styles.title} value={title} textCase="upper" />
      <Input
        className={styles.input}
        placeholder={placeholder}
        spellCheck={false}
        type={type}
      />
    </div>
  )
}

export default AuthInput
