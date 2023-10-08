import React from "react"
import type { FC } from "react"

import TextContainer from "components/containers/TextContainer/TextContainer"
import TextField from "components/TextField/TextField"
import TextResults from "components/TextResults/TextResults"

import useTimer from "hooks/useTimer"
import useText from "hooks/useText"

import { shortWords as initialText } from "text"

import styles from "./HomePage.module.scss"

const HomePage: FC = () => {
  const { text, setText } = useText(initialText)
  const timer = useTimer()

  return (
    <>
      <TextContainer>
        <TextField timer={timer} text={text} />
      </TextContainer>

      <TextResults timer={timer} text={text} />
    </>
  )
}

export default HomePage
