import React from "react"
import type { FC } from "react"

import cn from "classnames"

import styles from "./Button.module.scss"

interface ButtonProps {
  className?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

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
