import React from "react"
import type { FC } from "react"

import type { InputProps } from "./InputProps"

import cn from "classnames"

import styles from "./Input.module.scss"

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={cn(styles.container, className)} {...props} />
}

export default Input
