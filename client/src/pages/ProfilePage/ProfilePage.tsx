import type { FC } from "react"
import React, { useState } from "react"

import ProfileContainer from "components/containers/ProfileContainer/ProfileContainer"

import PersonalInfo from "components/PersonalInfo/PersonalInfo"
import ProfileStatistics from "components/ProfileStatistics/ProfileStatistics"

import styles from "./ProfilePage.module.scss"
import { useQuery } from "react-query"
import { useAppDispatch, useAppSelector } from "hooks/storeHooks"
import { setUsername } from "store"

const ProfilePage: FC = () => {
  const userId = useAppSelector((store) => store.settings.account.userId)
  const dispatch = useAppDispatch()

  const [login, setLogin] = useState<string>("")
  const [registrationDate, setRegistrationDate] = useState<string>("")
  const [averageSpeed, setAverageSpeed] = useState<string>("0")
  const [maxSpeed, setMaxSpeed] = useState<string>("0")

  useQuery(
    ["user", userId],
    async () => {
      const res = await fetch(`/api/profile/?userId=${userId}`).then((res) =>
        res.json(),
      )
      setLogin(res.login)
      setRegistrationDate(res.date_registration)
      setAverageSpeed(res.average_speed)
      setMaxSpeed(res.max_speed)
      dispatch(setUsername(res.login))
    },
    { refetchOnWindowFocus: false, enabled: !!userId },
  )

  return (
    <ProfileContainer>
      <div className={styles.left}>
        <PersonalInfo login={login} registrationDate={registrationDate} />
        <ProfileStatistics averageSpeed={averageSpeed} maxSpeed={maxSpeed} />
      </div>
    </ProfileContainer>
  )
}

export default ProfilePage
