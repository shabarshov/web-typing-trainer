import React from "react"
import type { FC } from "react"
import { useTranslation } from "react-i18next"

import type { TextResultsProps } from "./TextResultsProps"

import TitledCard from "components/TitledCard/TitledCard"
import Tooltip from "components/Tooltip/Tooltip"
import Time from "components/Time/Time"
import { Text } from "components/UI"

import styles from "./TextResults.module.scss"

const TextResults: FC<TextResultsProps> = ({ text, timer }) => {
  const { t } = useTranslation()

  return (
    <>
      {timer.timerValue ? (
        <div className={styles.results}>
          <TitledCard className={styles.card} title={t("Time")}>
            <Time value={timer.timerValue} />
          </TitledCard>
          <TitledCard className={styles.card} title={t("Characters")}>
            <Tooltip
              value={`${text.countOfCorrect()} ${t(
                "Correct",
              )} / ${text.countOfIncorrect()} ${t("Incorrect")}`}
              className={styles.tooltip}
            >
              <Text
                className={styles.text}
                value={`${text.countOfCorrect()} / ${text.countOfIncorrect()}`}
              />
            </Tooltip>
          </TitledCard>
          <TitledCard className={styles.card} title={t("Speed")}>
            <Tooltip
              className={styles.tooltip}
              value={t("Characters per minute")}
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
