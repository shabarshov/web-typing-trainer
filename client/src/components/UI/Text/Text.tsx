import React, { forwardRef } from "react"
import cn from "classnames"

import type { TextProps } from "./TextProps"

import styles from "./Text.module.scss"

const Text = forwardRef<HTMLSpanElement, TextProps>(function Text(
  { className, textCase, value, style }: TextProps,
  ref,
) {
  return (
    <span ref={ref} className={cn(styles.text, className)} style={style}>
      {textCase
        ? textCase === "upper"
          ? value.toUpperCase()
          : value.toLowerCase()
        : value}
    </span>
  )
})

export default Text
