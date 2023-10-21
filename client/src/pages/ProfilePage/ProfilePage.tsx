import type { FC } from "react"
import React from "react"

import ProfileContainer from "components/containers/ProfileContainer/ProfileContainer"

import PersonalInfo from "components/PersonalInfo/PersonalInfo"
import ProfileStatistics from "components/ProfileStatistics/ProfileStatistics"
import PersonalAchievements from "components/PersonalAchievements/PersonalAchievements"

import styles from "./ProfilePage.module.scss"

const ProfilePage: FC = () => {
  return (
    <ProfileContainer>
      <div className={styles.left}>
        <PersonalInfo />
        <ProfileStatistics />
      </div>

      <PersonalAchievements />
    </ProfileContainer>
  )
}

export default ProfilePage
