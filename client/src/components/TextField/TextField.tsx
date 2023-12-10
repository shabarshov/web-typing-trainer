import React, { useEffect, useState } from "react"
import type { FC, KeyboardEvent } from "react"

import type { TextFieldProps } from "./TextFieldProps"

import Word from "components/Word/Word"
import Caret from "components/Caret/Caret"

import { CHARACTERS } from "constants/characters"
import { TEXT_WRAPPER_MARGIN } from "constants/sizes"
import useWindowResize from "hooks/useWindowResize"

import styles from "./TextField.module.scss"
import { useAppSelector } from "hooks/storeHooks"

const TextField: FC<TextFieldProps> = ({ text, timer }) => {
  const storeValues = useAppSelector((state) => state.settings.font)

  const textCaretPosition = () =>
    text.caretPosition(storeValues.symbolWidth, storeValues.symbolHeight)

  const textCountOfRows = () =>
    text.countOfRows(storeValues.symbolWidth, storeValues.symbolHeight)

  const textCurrentRow = () =>
    text.currentRow(storeValues.symbolWidth, storeValues.symbolHeight)

  const { windowWidth } = useWindowResize()
  const [caretPosition, setCaretPosition] = useState({
    left: 0,
    top: 0,
  })

  useEffect(() => {
    setCaretPosition(textCaretPosition())
  }, [windowWidth])

  useEffect(() => {
    setCaretPosition({ left: 0, top: 0 })
  }, [timer])

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

      setCaretPosition(textCaretPosition())
    }
  }

  const style = { bottom: `${caretPosition.top}` }

  if (
    textCountOfRows() > 3 &&
    textCurrentRow() &&
    textCurrentRow() !== textCountOfRows() - 1
  ) {
    style.bottom = `${caretPosition.top - storeValues.symbolHeight}px`
  } else if (textCountOfRows() - textCurrentRow() === 3 && textCurrentRow()) {
    style.bottom = `${caretPosition.top - 2 * storeValues.symbolHeight}px`
  }

  return (
    <div
      className={styles.container}
      style={{
        width: `${windowWidth - TEXT_WRAPPER_MARGIN * 2}px`,
        maxHeight: storeValues.symbolHeight * 3 + "px",
      }}
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
