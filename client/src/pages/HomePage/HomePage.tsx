import React, { useState } from "react"
import type { FC } from "react"

import TextField from "components/TextField/TextField"
import TextResults from "components/TextResults/TextResults"
import TextPanel from "components/TextPanel/TextPanel"
import Button from "components/UI/Button/Button"

import RightArrowIcon from "assets/svg/Home/RightArrowIcon"

import useTimer from "hooks/useTimer"
import useText from "hooks/useText"

import { longWords as initialText } from "text"

import styles from "./HomePage.module.scss"

const HomePage: FC = () => {
  const { text, setText } = useText(initialText)

  const [textLength, setTextLength] = useState<number>(50)
  const [textType, setTextType] = useState<"text" | "words">("words")

  const timer = useTimer()

  return (
    <>
      <TextPanel setTextLength={setTextLength} setTextType={setTextType} />

      <TextField timer={timer} text={text} />

      <Button tabIndex={1} className={styles.nextButton}>
        <RightArrowIcon />
      </Button>

      <TextResults timer={timer} text={text} />
    </>
  )
}

export default HomePage
