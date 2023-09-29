import React from "react"
import type { FC } from "react"

import type { SymbolProps } from "./SymbolProps"
import colors from "styles/colors.module.scss"

import styles from "./Symbol.module.scss"

const Symbol: FC<SymbolProps> = ({ value, isComplited }) => {
  const color = isComplited ? { color: colors.green } : { color: colors.white }

  return (
    <div className={styles.container} style={color}>
      {value === " " ? "\u00A0" : value}
    </div>
  )
}

export default Symbol
