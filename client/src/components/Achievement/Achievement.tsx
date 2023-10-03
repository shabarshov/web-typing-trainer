import React from "react"
import type { FC } from "react"

import type { AchievementProps } from "./AchievementProps"

import Card from "components/UI/Card/Card"
import AchievementIcon from "assets/svg/Profile/AchievementIcon"
import Text from "components/UI/Text/Text"

import cn from "classnames"

import styles from "./Achievement.module.scss"

const Achievement: FC<AchievementProps> = ({ isPassed }) => {
  return (
    <Card className={cn(styles.container)}>
      <div className={styles.header}>
        <AchievementIcon
          className={isPassed ? styles.passedIcon : styles.notPassedIcon}
        />
        <Text className={styles.title} value="Achieve title" />
      </div>
    </Card>
  )
}

export default Achievement
