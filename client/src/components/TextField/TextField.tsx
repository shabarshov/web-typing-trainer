import React, { useState } from "react"
import type { FC, KeyboardEvent } from "react"

import type { TextFieldProps } from "./TextFieldProps"

import Word from "components/Word/Word"
import Caret from "components/Caret/Caret"

import styles from "./TextField.module.scss"
import { CHARACTERS } from "constants/characters"
import { SYMBOL_HEIGHT } from "constants/sizes"

const TextField: FC<TextFieldProps> = ({ text, timer }) => {
  const [caretPosition, setCaretPosition] = useState({
    left: 0,
    top: 0,
  })

  const createWords = () => {
    return text.value().map((value, wordIndex) => {
      return <Word key={wordIndex} word={value} />
    })
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (CHARACTERS.includes(event.key) && !timer.timerValue) {
      if (!timer.startTime) timer.startTimer()

      if (event.key === text.currentSymbol()) {
        if (text.next()) timer.endTimer()
        setCaretPosition(text.caretPosition())
      } else if (event.key === "Backspace") {
        text.prev()
        setCaretPosition(text.caretPosition())
      } else {
        if (text.next(true)) timer.endTimer()
        setCaretPosition(text.caretPosition())
      }
    }
  }

  return (
    <div
      className={styles.container}
      onKeyDown={onKeyDownHandler}
      tabIndex={-1}
      style={{
        bottom: text.currentRow()
          ? text.currentRow() === text.countOfRows()
            ? `${caretPosition.top - SYMBOL_HEIGHT * 2}px`
            : `${caretPosition.top - SYMBOL_HEIGHT}px`
          : "0px",
      }}
    >
      {createWords()}
      <Caret left={caretPosition.left} top={caretPosition.top} />
    </div>
  )
}

export default TextField
