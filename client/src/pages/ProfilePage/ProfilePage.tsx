import type { FC } from "react"
import React from "react"

import ProfileContainer from "components/containers/ProfileContainer/ProfileContainer"

import PersonalInfo from "components/PersonalInfo/PersonalInfo"
import ProfileStatistics from "components/ProfileStatistics/ProfileStatistics"

const ProfilePage: FC = () => {
  return (
    <ProfileContainer>
      <PersonalInfo />
      <ProfileStatistics />
    </ProfileContainer>
  )
}

export default ProfilePage
