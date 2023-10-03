import React from "react"
import type { FC } from "react"

import type { ButtonProps } from "./ButtonProps"

import cn from "classnames"

import styles from "./Button.module.scss"

const Button: FC<ButtonProps> = ({ className, value = "", ...props }) => {
  return (
    <button className={cn(styles.container, className)} {...props}>
      {value}
    </button>
  )
}

export default Button
