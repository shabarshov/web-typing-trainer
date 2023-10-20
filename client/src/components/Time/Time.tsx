import React from "react"
import type { FC } from "react"

import Text from "components/UI/Text/Text"

import type { TimeProps } from "./TimeProps"

import msToTime from "utils/msToTime"

import styles from "./Time.module.scss"

const Time: FC<TimeProps> = ({ value }) => {
  const { min, sec, ms } = msToTime(value)

  return (
    <div className={styles.container}>
      <Text value={min} />
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <Text value={sec} />
      <div className={styles.dots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
      <Text value={ms} />
    </div>
  )
}

export default Time
