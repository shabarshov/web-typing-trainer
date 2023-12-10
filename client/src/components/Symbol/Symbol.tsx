import React from "react"
import type { FC } from "react"

import type { SymbolProps } from "./SymbolProps"

import { useAppSelector } from "hooks/storeHooks"

import colors from "styles/colors.module.scss"

import styles from "./Symbol.module.scss"

const Symbol: FC<SymbolProps> = ({ value, state }) => {
  const storeValues = useAppSelector((state) => state.settings.font)

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
    <div
      className={styles.container}
      style={{
        color,
        fontFamily: storeValues.fontFamily,
        fontSize: storeValues.fontSize + "px",
        width: storeValues.symbolWidth + "px",
        height: storeValues.symbolHeight + "px",
      }}
    >
      {value === " " ? (state === "error" ? "_" : "\u00A0") : value}
    </div>
  )
}

export default Symbol
