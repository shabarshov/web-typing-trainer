import type { FC } from "react"
import React from "react"
import styles from "./AuthInput.module.scss"

interface AuthInputProps {
  title?: string
  placeholder?: string
}

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
