import React from "react"
import type { FC } from "react"

import type { AuthInputProps } from "./AuthInputProps"

import styles from "./AuthInput.module.scss"

const AuthInput: FC<AuthInputProps> = ({ title, placeholder }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title?.toUpperCase()}</span>
      <input
        className={styles.input}
        placeholder={placeholder}
        spellCheck={false}
      />
    </div>
  )
}

export default AuthInput
