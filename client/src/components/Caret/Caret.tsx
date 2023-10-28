import React from "react"
import type { CSSProperties, FC } from "react"

import type { CaretProps } from "./CaretProps"

import { useAppSelector } from "hooks/storeHooks"

import cn from "classnames"

import styles from "./Caret.module.scss"

const Caret: FC<CaretProps> = ({ caretPosition }) => {
  const state = useAppSelector((state) => state.settings.caret)

  const blinkingStyle = state.blinking ? styles.blinking : ""
  const caretTypeStyle = new Map<string, CSSProperties>([
    ["default", styles.defaultCaret],
    ["underline", styles.underlineCaret],
    ["insert", styles.insertCaret],
  ]).get(state.caretType)

  return (
    <div
      className={cn(styles.caret, caretTypeStyle, blinkingStyle)}
      style={{ left: `${caretPosition.left}px`, top: `${caretPosition.top}px` }}
    ></div>
  )
}

export default Caret
