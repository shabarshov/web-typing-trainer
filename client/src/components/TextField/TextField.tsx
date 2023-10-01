import React from "react"
import type { FC, KeyboardEvent } from "react"

import type { TextFieldProps } from "./TextFieldProps"

import Word from "components/Word/Word"

import styles from "./TextField.module.scss"

const TextField: FC<TextFieldProps> = ({ setCaretPosition, text }) => {
  const createWords = () => {
    return text.value().map((value, wordIndex) => {
      return <Word key={wordIndex} word={value} />
    })
  }

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === text.currentSymbol()) {
      text.next()
      setCaretPosition(text.caretPosition)
    }

    if (event.key === "Backspace") {
      text.prev()
      setCaretPosition(text.caretPosition)
    }
  }

  return (
    <div className={styles.container} onKeyDown={onKeyDownHandler} tabIndex={0}>
      {createWords()}
    </div>
  )
}

export default TextField
