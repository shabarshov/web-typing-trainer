import React, { forwardRef } from "react"

import type { ButtonProps } from "./ButtonProps"

import cn from "classnames"

import styles from "./Button.module.scss"


const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, ...props }: ButtonProps,
  ref,
) {
  return (
    <button className={cn(styles.container, className)} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button
