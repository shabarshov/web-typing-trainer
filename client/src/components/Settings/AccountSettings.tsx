import React, { useState, forwardRef } from "react"

import { Text, Button } from "components/UI"

import * as Modals from "./AccountSettingsModals"

import styles from "./styles.module.scss"
import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

const AccountSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.account)
    const dispatch = useAppDispatch()

    const [isDeleteModalVisible, setIsDeleteModalVisible] =
      useState<boolean>(false)

    const [isPasswordModalVisible, setIsPasswordModalVisible] =
      useState<boolean>(false)

    const [isUsernameModalVisible, setIsUsernameModalVisible] =
      useState<boolean>(false)

    const usernameWarn =
      "After changing your username, your old username will be released and any other user will be able to use it!"

    const passwordWarn =
      "If you change your password, you will have to re-log in. Don't tell anyone your new password!"

    const deleteWarn =
      "If you delete your account, you will not be able to restore it. All your progress will be lost!"

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
          <Text className={styles.text} value="Delete account" />
        </Button>
        <Text className={styles.warningText} value={deleteWarn} />

        <Button
          className={styles.dangerButton}
          onClick={passwordOnClickHandler}
        >
          <Text className={styles.text} value="Change password" />
        </Button>
        <Text className={styles.warningText} value={passwordWarn} />

        <Button
          className={styles.dangerButton}
          onClick={usernameOnClickHandler}
        >
          <Text className={styles.text} value="Change username" />
        </Button>
        <Text className={styles.warningText} value={usernameWarn} />

        <Text ref={ref} className={styles.dangerText} value="Danger zone" />

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
