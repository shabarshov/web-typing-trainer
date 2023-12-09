import React, { forwardRef } from "react"
import { useTranslation } from "react-i18next"

import { Text, Button } from "components/UI"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import styles from "./styles.module.scss"

const AccountSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.account)
    const { t } = useTranslation()

    const language = useAppSelector(
      (state) => state.settings.workspace.interfaceLanguage,
    )

    const dispatch = useAppDispatch()

    const usernameWarning = t("usernameWarning")
    const passwordWarning = t("passwordWarning")
    const deleteWarning = t("deleteWarning")

    return (
      <div className={styles.dangerZoneContainer}>
        <Button className={styles.dangerButton}>
          <Text className={styles.text} value={t("Delete account")} />
        </Button>
        <Text className={styles.warningText} value={deleteWarning} />

        <Button className={styles.dangerButton}>
          <Text className={styles.text} value={t("Change password")} />
        </Button>
        <Text className={styles.warningText} value={passwordWarning} />

        <Button className={styles.dangerButton}>
          <Text className={styles.text} value={t("Change username")} />
        </Button>
        <Text className={styles.warningText} value={usernameWarning} />

        <Text ref={ref} className={styles.dangerText} value={t("Account")} />
      </div>
    )
  },
)

export default AccountSettings
