import React, { useState, forwardRef } from "react"
import { useTranslation } from "react-i18next"

import { Text, Button } from "components/UI"

import * as Modals from "./AccountSettingsModals"

import styles from "./styles.module.scss"

const AccountSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const { t } = useTranslation()

    const usernameWarning = t("usernameWarning")
    const passwordWarning = t("passwordWarning")
    const deleteWarning = t("deleteWarning")
    const [isDeleteModalVisible, setIsDeleteModalVisible] =
      useState<boolean>(false)

    const [isPasswordModalVisible, setIsPasswordModalVisible] =
      useState<boolean>(false)

    const [isUsernameModalVisible, setIsUsernameModalVisible] =
      useState<boolean>(false)

    const deleteOnClickHandler = () => {
      setIsDeleteModalVisible(true)
    }

    const usernameOnClickHandler = () => {
      setIsUsernameModalVisible(true)
    }

    const passwordOnClickHandler = () => {
      setIsPasswordModalVisible(true)
    }

    return (
      <div className={styles.dangerZoneContainer}>
        <Button className={styles.dangerButton} onClick={deleteOnClickHandler}>
          <Text className={styles.text} value={t("Delete account")} />
        </Button>

        <Text className={styles.warningText} value={t(deleteWarning)} />

        <Button
          className={styles.dangerButton}
          onClick={passwordOnClickHandler}
        >
          <Text className={styles.text} value={t("Change password")} />
        </Button>

        <Text className={styles.warningText} value={passwordWarning} />

        <Button
          className={styles.dangerButton}
          onClick={usernameOnClickHandler}
        >
          <Text className={styles.text} value={t("Change username")} />
        </Button>

        <Text className={styles.warningText} value={usernameWarning} />

        <Text ref={ref} className={styles.dangerText} value={t("Account")} />

        {isDeleteModalVisible ? (
          <Modals.DeleteModal setIsVisible={setIsDeleteModalVisible} />
        ) : null}
        {isUsernameModalVisible ? (
          <Modals.UsernameModal setIsVisible={setIsUsernameModalVisible} />
        ) : null}
        {isPasswordModalVisible ? (
          <Modals.PasswordModal setIsVisible={setIsPasswordModalVisible} />
        ) : null}
      </div>
    )
  },
)

export default AccountSettings
