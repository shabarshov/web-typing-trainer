import React from "react"
import type { FC } from "react"

import type { ProfileContainerProps } from "./ProfileContainerProps"

import styles from "./ProfileContainer.module.scss"

const ProfileContainer: FC<ProfileContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default ProfileContainer
