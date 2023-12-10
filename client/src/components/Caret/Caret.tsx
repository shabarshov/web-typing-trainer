import React from "react"
import type { CSSProperties, FC } from "react"

import type { CaretProps } from "./CaretProps"

import { useAppSelector } from "hooks/storeHooks"

import cn from "classnames"

import styles from "./Caret.module.scss"
import {
  DEFAULT_CARET_HEIGHT,
  DEFAULT_CARET_WIDTH,
  DEFAULT_FONT_SIZE,
  INSERT_CARET_HEIGHT,
  INSERT_CARET_WIDTH,
  UNDERLINE_CARET_HEIGHT,
  UNDERLINE_CARET_WIDTH,
} from "constants/sizes"

const Caret: FC<CaretProps> = ({ caretPosition }) => {
  const caretState = useAppSelector((state) => state.settings.caret)

  const FontSizeRatio =
    parseInt(useAppSelector((state) => state.settings.font.fontSize)) /
    DEFAULT_FONT_SIZE

  const currentSymbolHeight = useAppSelector(
    (state) => state.settings.font.symbolHeight,
  )

  const currentFontSize = parseInt(
    useAppSelector((state) => state.settings.font.fontSize),
  )

  const blinkingStyle = caretState.blinking ? styles.blinking : ""
  const caretTypeStyle = new Map<string, CSSProperties>([
    ["default", styles.defaultCaret],
    ["underline", styles.underlineCaret],
    ["insert", styles.insertCaret],
  ]).get(caretState.caretType)

  const inlineCaretStyle = new Map<string, CSSProperties>([
    [
      "default",
      {
        width: DEFAULT_CARET_WIDTH * FontSizeRatio + "px",
        height: DEFAULT_CARET_HEIGHT * FontSizeRatio + "px",
        marginTop: 8 * FontSizeRatio + "px",
        borderRadius: 2 * FontSizeRatio + "px",
      },
    ],
    [
      "underline",
      {
        width: UNDERLINE_CARET_WIDTH * FontSizeRatio + "px",
        height: UNDERLINE_CARET_HEIGHT * FontSizeRatio + "px",
        marginTop:
          (currentSymbolHeight - currentFontSize) / 2 + currentFontSize + "px",
        borderRadius: 2 * FontSizeRatio + "px",
      },
    ],
    [
      "insert",
      {
        width: INSERT_CARET_WIDTH * FontSizeRatio + "px",
        height: (INSERT_CARET_HEIGHT - 12) * FontSizeRatio + "px",
        marginTop: 8 * FontSizeRatio + "px",
        borderRadius: 4 * FontSizeRatio + "px",
      },
    ],
  ]).get(caretState.caretType)

  return (
    <div
      className={cn(styles.caret, caretTypeStyle, blinkingStyle)}
      style={{
        left: `${caretPosition.left}px`,
        top: `${caretPosition.top}px`,
        ...inlineCaretStyle,
      }}
    ></div>
  )
}

export default Caret
