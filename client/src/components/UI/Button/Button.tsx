import React from "react"
import type { FC } from "react"

import type { ButtonProps } from "./ButtonProps"

import cn from "classnames"

import styles from "./Button.module.scss"

const Button: FC<ButtonProps> = ({
  className,
  onClick,
  value = "",
  disabled = false,
}) => {
  return (
    <button
      className={cn(styles.container, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  )
}

export default Button