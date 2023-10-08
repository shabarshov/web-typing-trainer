import React, { useState } from "react"
import type { FC } from "react"

import type { SymbolProps } from "./SymbolProps"
import colors from "styles/colors.module.scss"

import styles from "./Symbol.module.scss"

const Symbol: FC<SymbolProps> = ({ value, state }) => {
  let color: string

  switch (state) {
    case "complited":
      color = colors.white
      break
    case "error":
      color = colors.red
      break
    default:
      color = colors.whiteGrey
      break
  }

  return (
    <div className={styles.container} style={{ color }}>
      {value === " " ? "\u00A0" : value}
    </div>
  )
}

export default Symbol
