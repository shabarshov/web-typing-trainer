import React, { forwardRef } from "react"

import { Text, Button } from "components/UI"

import styles from "./styles.module.scss"
import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

const AccountSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.accountSettingsSlice)
    const dispatch = useAppDispatch()

    const usernameWarn =
      "After changing your username, your old username will be released and any other user will be able to use it!"

    const passwordWarn =
      "If you change your password, you will have to re-log in. Don't tell anyone your new password!"

    const deleteWarn =
      "If you delete your account, you will not be able to restore it. All your progress will be lost!"

    return (
      <div className={styles.dangerZoneContainer}>
        <Button className={styles.dangerButton}>
          <Text className={styles.text} value="Delete account" />
        </Button>
        <Text className={styles.warningText} value={deleteWarn} />

        <Button className={styles.dangerButton}>
          <Text className={styles.text} value="Change password" />
        </Button>
        <Text className={styles.warningText} value={passwordWarn} />

        <Button className={styles.dangerButton}>
          <Text className={styles.text} value="Change username" />
        </Button>
        <Text className={styles.warningText} value={usernameWarn} />

        <Text ref={ref} className={styles.dangerText} value="Danger zone" />
      </div>
    )
  },
)

export default AccountSettings
