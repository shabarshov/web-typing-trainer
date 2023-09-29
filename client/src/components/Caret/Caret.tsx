import React from "react"
import type { FC } from "react"

import type { CaretProps } from "./CaretProps"

import styles from "./Caret.module.scss"

const Caret: FC<CaretProps> = ({ left = "-1px", top = "0px" }) => {
  return <div className={styles.caret} style={{ left: left, top: top }}></div>
}

export default Caret
