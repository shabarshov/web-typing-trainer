import React from "react"
import type { FC } from "react"

import type { AuthContainerProps } from "./AuthContainerProps"

import cn from "classnames"

import styles from "./AuthContainer.module.scss"

const AuthContainer: FC<AuthContainerProps> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default AuthContainer
