import React from "react"
import type { FC } from "react"
import type { TextPanelProps } from "./TextPanelProps"

import PanelButton from "components/PanelButton/PanelButton"

import { useAppSelector } from "hooks/storeHooks"

import styles from "./TextPanel.module.scss"

const TextPanel: FC<TextPanelProps> = ({ setTextLength, setTextType }) => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  return (
    <div className={styles.container}>
      <PanelButton
        onClick={() => setTextType("text")}
        className={styles.leftPanelButton}
        value={language === "eng" ? "Text" : "Текст"}
      />
      <PanelButton
        onClick={() => setTextType("words")}
        className={styles.leftPanelButton}
        value={language === "eng" ? "Words" : "Слова"}
      />

      <div className={styles.separator} />

      <PanelButton
        onClick={() => setTextLength(10)}
        className={styles.rightPanelButton}
        value="10"
      />
      <PanelButton
        onClick={() => setTextLength(20)}
        className={styles.rightPanelButton}
        value="20"
      />
      <PanelButton
        onClick={() => setTextLength(30)}
        className={styles.rightPanelButton}
        value="30"
      />
      <PanelButton
        onClick={() => setTextLength(40)}
        className={styles.rightPanelButton}
        value="40"
      />
      <PanelButton
        onClick={() => setTextLength(50)}
        className={styles.rightPanelButton}
        value="50"
      />
    </div>
  )
}

export default TextPanel
