import type { FC } from "react"
import React from "react"
import { useTranslation } from "react-i18next"

import TitledCard from "components/TitledCard/TitledCard"
import { Text } from "components/UI"

import styles from "./ProfileStatistics.module.scss"

const ProfileStatistics: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <TitledCard className={styles.card} title={t("Best speed")}>
        <Text value="643" />
      </TitledCard>
      <TitledCard className={styles.card} title={t("Average speed")}>
        <Text value="531" />
      </TitledCard>
    </div>
  )
}

export default ProfileStatistics
