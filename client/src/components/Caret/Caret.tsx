import React from "react"
import type { FC } from "react"

import type { CaretProps } from "./CaretProps"

import styles from "./Caret.module.scss"

const Caret: FC<CaretProps> = ({ left = -1, top = 0 }) => {
  return (
    <div
      className={styles.caret}
      style={{ left: `${left}px`, top: `${top}px` }}
    ></div>
  )
}

export default Caret
