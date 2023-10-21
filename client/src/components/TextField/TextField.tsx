import React, { useEffect, useState } from "react"
import type { FC, KeyboardEvent } from "react"

import type { TextFieldProps } from "./TextFieldProps"

import Word from "components/Word/Word"
import Caret from "components/Caret/Caret"

import { CHARACTERS } from "constants/characters"
import { SYMBOL_HEIGHT, TEXT_WRAPPER_MARGIN } from "constants/sizes"
import useWindowResize from "hooks/useWindowResize"

import styles from "./TextField.module.scss"

const TextField: FC<TextFieldProps> = ({ text, timer }) => {
  const { windowWidth } = useWindowResize()
  const [caretPosition, setCaretPosition] = useState({
    left: 0,
    top: 0,
  })

  useEffect(() => {
    setCaretPosition(text.caretPosition())
  }, [windowWidth])

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
      } else if (event.key === "Backspace") {
        text.prev()
      } else {
        if (text.next(true)) timer.endTimer()
      }

      setCaretPosition(text.caretPosition())
    }
  }

  const style = { bottom: `${caretPosition.top}` }

  if (
    text.countOfRows() > 3 &&
    text.currentRow() &&
    text.currentRow() !== text.countOfRows() - 1
  ) {
    style.bottom = `${caretPosition.top - SYMBOL_HEIGHT}px`
  } else if (
    text.countOfRows() - text.currentRow() === 3 &&
    text.currentRow()
  ) {
    style.bottom = `${caretPosition.top - 2 * SYMBOL_HEIGHT}px`
  }

  return (
    <div
      className={styles.container}
      style={{ width: `${windowWidth - TEXT_WRAPPER_MARGIN * 2}px` }}
    >
      <div
        className={styles.field}
        onKeyDown={onKeyDownHandler}
        tabIndex={-1}
        style={style}
      >
        {createWords()}
        <Caret caretPosition={caretPosition} />
      </div>
    </div>
  )
}

export default TextField
