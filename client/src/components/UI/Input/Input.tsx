import React, { forwardRef } from "react"

import type { InputProps } from "./InputProps"

import cn from "classnames"

import styles from "./Input.module.scss"

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props }: InputProps,
  ref,
) {
  return (
    <input className={cn(styles.container, className)} ref={ref} {...props} />
  )
})

export default Input
