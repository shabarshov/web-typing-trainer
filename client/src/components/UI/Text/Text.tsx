import type { FC } from "react"
import React from "react"
import cn from "classnames"

import type { TextProps } from "./TextProps"

import styles from "./Text.module.scss"

const Text: FC<TextProps> = ({ className, textCase, value }) => {
  return (
    <span className={cn(styles.text, className)}>
      {textCase
        ? textCase === "upper"
          ? value.toUpperCase()
          : value.toLowerCase()
        : value}
    </span>
  )
}

export default Text
