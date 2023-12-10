import type { FC } from "react"
import React from "react"
import { useTranslation } from "react-i18next"

import type { ProfileStatiscticsProps } from "./ProfileStatiscticsProps"

import TitledCard from "components/TitledCard/TitledCard"
import { Text } from "components/UI"

import styles from "./ProfileStatistics.module.scss"

const ProfileStatistics: FC<ProfileStatiscticsProps> = ({
  averageSpeed,
  maxSpeed,
}) => {
  const { t } = useTranslation()
  return (
    <div className={styles.container}>
      <TitledCard className={styles.card} title={t("Best speed")}>
        <Text value={maxSpeed} />
      </TitledCard>
      <TitledCard className={styles.card} title={t("Average speed")}>
        <Text value={averageSpeed} />
      </TitledCard>
    </div>
  )
}

export default ProfileStatistics
