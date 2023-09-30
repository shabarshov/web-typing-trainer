import React from "react"
import type { FC } from "react"

import Symbol from "components/Symbol/Symbol"

import type { WordProps } from "./WordProps"

import styles from "./Word.module.scss"

const Word: FC<WordProps> = ({ word }) => {
  const createWord = (): JSX.Element[] => {
    return word.map((value, index) => {
      let symbolState: boolean

      switch (word.isComplited) {
        case true:
          symbolState = true
          break

        case false:
          symbolState = false
          break

        default:
          symbolState = word.isComplited > index
          break
      }

      return (
        <Symbol key={index} value={value.value} isComplited={symbolState} />
      )
    })
  }

  return <div className={styles.container}>{createWord()}</div>
}

export default Word
