import React, { useState } from "react"

import Tooltip from "components/Tooltip/Tooltip"
import Text from "components/UI/Text/Text"
import Button from "components/UI/Button/Button"
import UploadAvatar from "components/UploadAvatar/UploadAvatar"
import * as Icons from "assets/svg/Profile"

import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [avatar, setAvatar] = useState<string>("")

  const onClickHandler = () => {
    setIsVisible(true)
  }

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
          <Button onClick={onClickHandler} className={styles.editBtn}>
            <Icons.EditIcon className={styles.editIcon} />
          </Button>
        </Tooltip>

        <Text className={styles.login} value="VadimAnigilator" />
        <Text className={styles.email} value="alexey_shabarshov@mail.ru" />
      </div>

      {isVisible && (
        <UploadAvatar setAvatar={setAvatar} setIsVisible={setIsVisible} />
      )}
    </div>
  )
}

export default PersonalInfo
