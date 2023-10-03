import type { FC } from "react"
import React from "react"

import TitledCard from "components/TitledCard/TitledCard"

import styles from "./ProfileStatistics.module.scss"

const ProfileStatistics: FC = () => {
  return (
    <div className={styles.container}>
      <TitledCard className={styles.card} title="Best speed" value="643" />
      <TitledCard className={styles.card} title="Average speed" value="531" />
    </div>
  )
}

export default ProfileStatistics
