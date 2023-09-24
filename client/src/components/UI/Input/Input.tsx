import React from "react"
import type { FC } from "react"

import cn from "classnames"

import styles from "./Input.module.scss"

interface InputProps {
  className?: string
  type?: "password" | "text"
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
  className,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) => {
  return (
    <input
      className={cn(styles.container, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
