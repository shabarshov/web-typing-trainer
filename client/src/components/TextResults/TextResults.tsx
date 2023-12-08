import React from "react"
import type { FC } from "react"

import type { TextResultsProps } from "./TextResultsProps"

import TitledCard from "components/TitledCard/TitledCard"
import Tooltip from "components/Tooltip/Tooltip"
import Time from "components/Time/Time"
import { Text } from "components/UI"

import { useAppSelector } from "hooks/storeHooks"

import styles from "./TextResults.module.scss"

const TextResults: FC<TextResultsProps> = ({ text, timer }) => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  return (
    <>
      {timer.timerValue ? (
        <div className={styles.results}>
          <TitledCard
            className={styles.card}
            title={language === "eng" ? "Time" : "Время"}
          >
            <Time value={timer.timerValue} />
          </TitledCard>
          <TitledCard
            className={styles.card}
            title={language === "eng" ? "Characters" : "Символы"}
          >
            <Tooltip
              value={`${text.countOfCorrect()} ${
                language === "eng" ? "Correct" : "Корректно"
              } / ${text.countOfIncorrect()} ${
                language === "eng" ? "Incorrect" : "Некорректно"
              }`}
              className={styles.tooltip}
            >
              <Text
                className={styles.text}
                value={`${text.countOfCorrect()} / ${text.countOfIncorrect()}`}
              />
            </Tooltip>
          </TitledCard>
          <TitledCard
            className={styles.card}
            title={language === "eng" ? "Speed" : "Скорость"}
          >
            <Tooltip
              className={styles.tooltip}
              value={
                language === "eng"
                  ? "Characters per minute"
                  : "Символов в минуту"
              }
            >
              <Text
                className={styles.text}
                value={`${
                  Math.floor(60000 / timer.timerValue) * text.countOfCorrect()
                }`}
              />
            </Tooltip>
          </TitledCard>
        </div>
      ) : null}
    </>
  )
}

export default TextResults
