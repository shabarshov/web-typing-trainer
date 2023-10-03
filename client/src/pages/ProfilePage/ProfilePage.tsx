import type { FC } from "react"
import React from "react"

import ProfileContainer from "components/containers/ProfileContainer/ProfileContainer"

import PersonalInfo from "components/PersonalInfo/PersonalInfo"
import Achievement from "components/Achievement/Achievement"
import ScrollableContainer from "components/containers/ScrollableContainer/ScrollableContainer"
import ProfileStatistics from "components/ProfileStatistics/ProfileStatistics"

import cn from "classnames"

import styles from "./ProfilePage.module.scss"

const ProfilePage: FC = () => {
  return (
    <ProfileContainer>
      <div className={styles.left}>
        <PersonalInfo />
        <ProfileStatistics />
      </div>

      <ScrollableContainer className={cn(styles.achievements, styles.right)}>
        <Achievement isPassed={true} />
        <Achievement isPassed={true} />
        <Achievement isPassed={true} />
        <Achievement isPassed={false} />
        <Achievement isPassed={false} />
        <Achievement isPassed={false} />
        <Achievement isPassed={false} />
      </ScrollableContainer>
    </ProfileContainer>
  )
}

export default ProfilePage
