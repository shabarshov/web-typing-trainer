import React, { useEffect, useState } from "react"
import type { FC } from "react"

import { useQuery } from "react-query"

import TextField from "components/TextField/TextField"
import TextResults from "components/TextResults/TextResults"
import TextPanel from "components/TextPanel/TextPanel"
import { Button } from "components/UI"

import RightArrowIcon from "assets/svg/Home/RightArrowIcon"

import useTimer from "hooks/useTimer"
import useText from "hooks/useText"

import styles from "./HomePage.module.scss"

const HomePage: FC = () => {
  const { data, isLoading, refetch } = useQuery("text", () =>
    fetch(`/api/?lang=${textLanguage}&type=${textType}&len=${textLength}`).then(
      (res) => res.json(),
    ),
  )

  const { text, setText } = useText("")
  const [textLength, setTextLength] = useState<number>(50)
  const [textType, setTextType] = useState<"text" | "words">("text")
  const [textLanguage, setTextLanguage] = useState<"ru" | "en">("ru")

  const timer = useTimer()

  useEffect(() => {
    if (data) {
      if (textType === "text") {
        setText(data.text)
        timer.restartTimer()
      } else if (textType === "words") {
        setText(data.words)
        timer.restartTimer()
      }
    } else {
      setText("")
      timer.restartTimer()
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [textLength, textType, textLanguage])

  const nextTextButtonClickHandler = () => {
    refetch()
  }

  return (
    <>
      <TextPanel
        textLength={textLength}
        textType={textType}
        textLanguage={textLanguage}
        setTextLength={setTextLength}
        setTextType={setTextType}
        setTextLanguage={setTextLanguage}
      />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <TextField timer={timer} text={text} />
      )}

      <Button
        tabIndex={1}
        className={styles.nextButton}
        onClick={nextTextButtonClickHandler}
      >
        <RightArrowIcon />
      </Button>

      <TextResults timer={timer} text={text} />
    </>
  )
}

export default HomePage
