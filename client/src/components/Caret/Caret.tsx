import React from "react"
import type { FC } from "react"

import type { CaretProps } from "./CaretProps"

import styles from "./Caret.module.scss"

const Caret: FC<CaretProps> = ({ caretPosition }) => {
  return (
    <div
      className={styles.caret}
      style={{ left: `${caretPosition.left}px`, top: `${caretPosition.top}px` }}
    ></div>
  )
}

export default Caret
