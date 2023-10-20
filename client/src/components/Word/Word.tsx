import React from "react"
import type { FC } from "react"

import type { WordProps } from "./WordProps"

import Symbol from "components/Symbol/Symbol"

import styles from "./Word.module.scss"

const Word: FC<WordProps> = ({ word }) => {
  const createWord = (): JSX.Element[] => {
    return word.map((value, index) => {
      return <Symbol key={index} value={value.value} state={value.state} />
    })
  }

  return <div className={styles.container}>{createWord()}</div>
}

export default Word
