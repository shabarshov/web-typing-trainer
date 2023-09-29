import React from "react"
import type { FC } from "react"

import Symbol from "components/Symbol/Symbol"

import type { SymbolProps } from "components/Symbol/SymbolProps"
import type { WordProps } from "./WordProps"

import styles from "./Word.module.scss"

const Word: FC<WordProps> = ({ value, wordIndex, isComplited }) => {
  const createWord = (): JSX.Element[] => {
    return value.split("").map((value, symbolIndex) => {
      const symbolProps = {
        value,
        isComplited,
      } as SymbolProps

      switch (isComplited) {
        case true:
          symbolProps.isComplited = true
          break

        case false:
          symbolProps.isComplited = false
          break

        default:
          symbolProps.isComplited = isComplited > symbolIndex
          break
      }

      return <Symbol key={`${wordIndex}${symbolIndex}`} {...symbolProps} />
    })
  }

  return <div className={styles.container}>{createWord()}</div>
}

export default Word
