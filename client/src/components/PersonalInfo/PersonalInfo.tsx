import React from "react"

import Tooltip from "components/Tooltip/Tooltip"
import Text from "components/UI/Text/Text"
import * as Icons from "assets/svg/Profile"

import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Icons.ProfileIcon className={styles.icon} />
        <Text className={styles.date} value="Joined: 25.02.2004" />
      </div>

      <div className={styles.personInfo}>
        <Tooltip value="edit">
          <Icons.EditIcon className={styles.editIcon} />
        </Tooltip>
        <Text className={styles.login} value="VadimSex228" />
        <Text className={styles.email} value="alexey_shabarshov@mail.ru" />
      </div>
    </div>
  )
}

export default PersonalInfo
