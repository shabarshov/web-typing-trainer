import React from "react"
import type { FC } from "react"

import type { InputProps } from "./InputProps"

import cn from "classnames"

import styles from "./Input.module.scss"

const Input: FC<InputProps> = ({
  className,
  type = "text",
  placeholder = "",
  value,
  onChange,
  spellCheck = false,
}) => {
  return (
    <input
      className={cn(styles.container, className)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      spellCheck={spellCheck}
    />
  )
}

export default Input
