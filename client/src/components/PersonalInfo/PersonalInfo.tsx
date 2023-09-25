import React from "react"

import Tooltip from "components/Tooltip/Tooltip"
import * as Icons from "assets/svg/Profile"
import Text from "components/UI/Text/Text"

import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  return (
    <div className={styles.container}>
      <Icons.ProfileIcon className={styles.icon} />
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
