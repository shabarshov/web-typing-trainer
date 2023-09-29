import React from "react"
import type { FC } from "react"

import type { TextFieldProps } from "./TextFieldProps"

import {
  createCounter,
  readString,
  getTextRowLengths,
  parseText,
  updateCaretPosition,
} from "utils"

import Word from "components/Word/Word"

import { shortWords as initialText } from "text"

import { SYMBOL_WIDTH, SYMBOL_HEIGHT } from "constants/index"

import styles from "./TextField.module.scss"

const rowLengths: number[] = getTextRowLengths(initialText)
const symbolCounter = createCounter()
const counterX = createCounter()
const rowCounter = createCounter()
const currentSymbol = readString(initialText)
const complitedSymbolsCounter = createCounter()
const complitedWordsCounter = createCounter()

const TextField: FC<TextFieldProps> = ({ setCaretPosition }) => {
  const createWords = (): JSX.Element[] => {
    return parseText(initialText).map((value, index) => {
      let isComplited: boolean | number = false

      if (index < complitedWordsCounter.getValue()) {
        isComplited = true
      } else if (index === complitedWordsCounter.getValue()) {
        isComplited = complitedSymbolsCounter.getValue()
      }

      return (
        <Word
          isComplited={isComplited}
          key={index}
          value={value}
          wordIndex={index}
        />
      )
    })
  }

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ): void => {
    if (event.key === currentSymbol.current().value) {
      complitedSymbolsCounter.increment()

      if (currentSymbol.current().value === " ") {
        complitedWordsCounter.increment()
        complitedSymbolsCounter.reset()
      }

      symbolCounter.increment()
      counterX.increment(SYMBOL_WIDTH)
      currentSymbol.next()

      let stepX = SYMBOL_WIDTH
      let stepY = 0

      if (counterX.getValue() >= rowLengths[rowCounter.getValue()]) {
        stepX = SYMBOL_WIDTH - rowLengths[rowCounter.getValue()]
        stepY = SYMBOL_HEIGHT
        counterX.reset()
        rowCounter.increment()
      }

      setCaretPosition((prev: { left: string; top: string }) =>
        updateCaretPosition(prev.left, prev.top, stepX, stepY),
      )
    }
  }

  return (
    <div className={styles.container} onKeyDown={onKeyDownHandler} tabIndex={0}>
      {createWords()}
    </div>
  )
}

export default TextField
