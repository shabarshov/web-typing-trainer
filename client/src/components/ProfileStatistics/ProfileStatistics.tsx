import type { FC } from "react"
import React from "react"

import TitledCard from "components/UI/TitledCard/TitledCard"
import Text from "components/UI/Text/Text"

import styles from "./ProfileStatistics.module.scss"

const ProfileStatistics: FC = () => {
  return (
    <div className={styles.container}>
      <TitledCard>
        <Text value="Joined" />
        <Text value="18.09.2023" />
      </TitledCard>

      <TitledCard>
        <Text value="Best speed" />
        <Text value="643" />
      </TitledCard>

      <TitledCard>
        <Text value="Average speed" />
        <Text value="531" />
      </TitledCard>
    </div>
  )
}

export default ProfileStatistics
