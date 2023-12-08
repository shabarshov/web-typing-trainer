import React, { useState } from "react"

import Tooltip from "components/Tooltip/Tooltip"
import { Text, Button } from "components/UI"
import UploadAvatar from "components/UploadAvatar/UploadAvatar"
import * as Icons from "assets/svg/Profile"

import { useAppSelector } from "hooks/storeHooks"

import styles from "./PersonalInfo.module.scss"

const PersonalInfo = () => {
  const avatar = useAppSelector((state) => state.avatar)

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  const onClickHandler = () => {
    setIsVisible(true)
  }

  return (
    <div className={styles.container}>
      <Tooltip value={language === "eng" ? "Change avatar" : "Изменить аватар"}>
        <Button className={styles.button} onClick={onClickHandler}>
          {avatar.src ? (
            <img src={avatar.src} className={styles.avatarIcon} />
          ) : (
            <Icons.ProfileIcon className={styles.avatarIcon} />
          )}
        </Button>
      </Tooltip>

      <div className={styles.personInfo}>
        <Text className={styles.login} value="VadimAnigilator" />
        <Text className={styles.email} value="alexey_shabarshov@mail.ru" />
      </div>

      {isVisible && <UploadAvatar setIsVisible={setIsVisible} />}
    </div>
  )
}

export default PersonalInfo
