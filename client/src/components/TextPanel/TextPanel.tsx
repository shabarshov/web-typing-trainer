import React from "react"
import type { FC } from "react"
import type { TextPanelProps } from "./TextPanelProps"

import { Button, Text } from "components/UI"

import styles from "./TextPanel.module.scss"

const TextPanel: FC<TextPanelProps> = ({
  textLength,
  textType,
  textLanguage,
  setTextLength,
  setTextType,
  setTextLanguage,
}) => {
  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={() => setTextLanguage("en")}>
        <Text
          className={textLanguage === "en" ? styles.activeText : styles.text}
          value={"en"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextLanguage("ru")}>
        <Text
          className={textLanguage === "ru" ? styles.activeText : styles.text}
          value={"ru"}
        />
      </Button>

      <div className={styles.separator} />

      <Button className={styles.button} onClick={() => setTextType("text")}>
        <Text
          className={textType === "text" ? styles.activeText : styles.text}
          value={"text"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextType("words")}>
        <Text
          className={textType === "words" ? styles.activeText : styles.text}
          value={"words"}
        />
      </Button>

      <div className={styles.separator} />

      <Button className={styles.button} onClick={() => setTextLength(10)}>
        <Text
          className={textLength === 10 ? styles.activeText : styles.text}
          value={"10"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextLength(20)}>
        <Text
          className={textLength === 20 ? styles.activeText : styles.text}
          value={"20"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextLength(30)}>
        <Text
          className={textLength === 30 ? styles.activeText : styles.text}
          value={"30"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextLength(40)}>
        <Text
          className={textLength === 40 ? styles.activeText : styles.text}
          value={"40"}
        />
      </Button>

      <Button className={styles.button} onClick={() => setTextLength(50)}>
        <Text
          className={textLength === 50 ? styles.activeText : styles.text}
          value={"50"}
        />
      </Button>
    </div>
  )
}

export default TextPanel
