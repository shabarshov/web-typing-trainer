import React from "react"
import type { FC } from "react"

import ScrollableContainer from "components/containers/ScrollableContainer/ScrollableContainer"
import Achievement from "components/Achievement/Achievement"
import { UnblockedIcon, BlockedIcon } from "assets/svg/Profile"
import { Card, Text } from "components/UI"

import { useAppSelector } from "hooks/storeHooks"

import cn from "classnames"

import styles from "./PersonalAchievements.module.scss"

const PersonalAchievements: FC = () => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  return (
    <ScrollableContainer className={styles.achievements}>
      <Card className={styles.achievementTitle}>
        <UnblockedIcon className={cn(styles.icon, styles.green)} />
        <Text
          value={language === "eng" ? "Unblocked" : "Разблокировано"}
          className={styles.green}
        />
      </Card>
      <Achievement isPassed={true} />
      <Achievement isPassed={true} />

      <Card className={styles.achievementTitle}>
        <BlockedIcon className={cn(styles.icon, styles.red)} />
        <Text
          value={language === "eng" ? "Blocked" : "Заблокировано"}
          className={styles.red}
        />
      </Card>
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
      <Achievement isPassed={false} />
    </ScrollableContainer>
  )
}

export default PersonalAchievements
