import React from "react"
import type { FC } from "react"

import type { TextResultsProps } from "./TextResultsProps"

import TitledCard from "components/TitledCard/TitledCard"
import Tooltip from "components/Tooltip/Tooltip"
import Time from "components/Time/Time"
import Text from "components/UI/Text/Text"

import styles from "./TextResults.module.scss"

const TextResults: FC<TextResultsProps> = ({ text, timer }) => {
  return (
    <>
      {timer.timerValue ? (
        <div className={styles.results}>
          <TitledCard className={styles.card} title="Time">
            <Time value={timer.timerValue} />
          </TitledCard>
          <TitledCard className={styles.card} title="Characters">
            <Tooltip
              value={`${text.countOfCorrect()} Correct / ${text.countOfIncorrect()} Incorrect`}
              className={styles.tooltip}
            >
              <Text
                value={`${text.countOfCorrect()} / ${text.countOfIncorrect()}`}
              />
            </Tooltip>
          </TitledCard>
          <TitledCard className={styles.card} title="Speed">
            <Tooltip className={styles.tooltip} value="Characters per minute">
              <Text
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
