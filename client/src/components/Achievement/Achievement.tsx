import React from "react"
import type { FC } from "react"

import type { AchievementProps } from "./AchievementProps"

import { Card, Text } from "components/UI"
import { AchievementIcon } from "assets/svg/Profile"

import { useAppSelector } from "hooks/storeHooks"

import cn from "classnames"

import styles from "./Achievement.module.scss"

const Achievement: FC<AchievementProps> = ({ isPassed }) => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

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
        value={language === "eng" ? "Achieve title" : "Название ачивки"}
      />
    </Card>
  )
}

export default Achievement
