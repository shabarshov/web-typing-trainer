import React, { useState } from "react"

import Tooltip from "components/Tooltip/Tooltip"
import Text from "components/UI/Text/Text"
import UploadAvatar from "components/UploadAvatar/UploadAvatar"
import * as Icons from "assets/svg/Profile"

import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<string>("")

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {avatar ? (
          <img src={avatar} className={styles.avatarIcon} />
        ) : (
          <Icons.ProfileIcon className={styles.icon} />
        )}
        <Text className={styles.date} value="Joined: 25.02.2004" />
      </div>

      <div className={styles.personInfo}>
        <Tooltip value="edit">
          <Icons.EditIcon
            className={styles.editIcon}
            onClick={() => setVisible(true)}
          />
        </Tooltip>
        <Text className={styles.login} value="VadimSex228" />
        <Text className={styles.email} value="alexey_shabarshov@mail.ru" />
      </div>

      {visible && (
        <UploadAvatar getAvatar={setAvatar} setVisible={setVisible} />
      )}
    </div>
  )
}

export default PersonalInfo
