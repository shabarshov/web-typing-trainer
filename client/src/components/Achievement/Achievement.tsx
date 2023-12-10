import React, { useTransition } from "react"
import type { FC } from "react"

import type { AchievementProps } from "./AchievementProps"

import { Card, Text } from "components/UI"
import { AchievementIcon } from "assets/svg/Profile"

import { useTranslation } from "react-i18next"

import cn from "classnames"

import styles from "./Achievement.module.scss"

const Achievement: FC<AchievementProps> = ({ isPassed }) => {
  const { t } = useTranslation()

  return (
    <Card
      className={cn(
        styles.container,
        isPassed ? styles.passed : styles.notPassed,
      )}
    >
      <AchievementIcon
        className={isPassed ? styles.passedIcon : styles.notPassedIcon}
      />
      <Text
        className={cn(
          styles.title,
          isPassed ? styles.passedTitle : styles.notPassedTitle,
        )}
        value={t("Achieve title")}
      />
    </Card>
  )
}

export default Achievement
