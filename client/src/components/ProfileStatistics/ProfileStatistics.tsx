import type { FC } from "react"
import React from "react"

import TitledCard from "components/TitledCard/TitledCard"
import { Text } from "components/UI"

import { useAppSelector } from "hooks/storeHooks"

import styles from "./ProfileStatistics.module.scss"

const ProfileStatistics: FC = () => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  return (
    <div className={styles.container}>
      <TitledCard
        className={styles.card}
        title={language === "eng" ? "Best speed" : "Лучшая скорость"}
      >
        <Text value="643" />
      </TitledCard>
      <TitledCard
        className={styles.card}
        title={language === "eng" ? "Average speed" : "Средняя скорость"}
      >
        <Text value="531" />
      </TitledCard>
    </div>
  )
}

export default ProfileStatistics
