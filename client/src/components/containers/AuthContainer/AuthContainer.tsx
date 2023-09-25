import React from "react"
import type { FC } from "react"

import type { AuthContainerProps } from "./AuthContainerProps"

import styles from "./AuthContainer.module.scss"

const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default AuthContainer
