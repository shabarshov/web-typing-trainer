import React, { forwardRef } from "react"

import { Text, Button } from "components/UI"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import styles from "./styles.module.scss"

const AccountSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.account)

    const language = useAppSelector(
      (state) => state.settings.workspace.interfaceLanguage,
    )

    const dispatch = useAppDispatch()

    const usernameWarn =
      language === "eng"
        ? "After changing your username, your old username will be released and any other user will be able to use it!"
        : "После изменения вашего логина, ваш старый логин будет освобожден и любой другой пользователь сможет им пользоваться!"

    const passwordWarn =
      language === "eng"
        ? "If you change your password, you will have to re-log in. Don't tell anyone your new password!"
        : "Если вы измените свой пароль, вам придется повторно войти в систему. Никому не сообщайте свой новый пароль!"

    const deleteWarn =
      language === "eng"
        ? "If you delete your account, you will not be able to restore it. All your progress will be lost!"
        : "Если вы удалите свой аккаунт, вы не сможете его восстановить. Весь ваш прогресс будет потерян!"

    return (
      <div className={styles.dangerZoneContainer}>
        <Button className={styles.dangerButton}>
          <Text
            className={styles.text}
            value={language === "eng" ? "Delete account" : "Удалить аккаунт"}
          />
        </Button>
        <Text className={styles.warningText} value={deleteWarn} />

        <Button className={styles.dangerButton}>
          <Text
            className={styles.text}
            value={language === "eng" ? "Change password" : "Изменить пароль"}
          />
        </Button>
        <Text className={styles.warningText} value={passwordWarn} />

        <Button className={styles.dangerButton}>
          <Text
            className={styles.text}
            value={language === "eng" ? "Change username" : "Изменить логин"}
          />
        </Button>
        <Text className={styles.warningText} value={usernameWarn} />

        <Text
          ref={ref}
          className={styles.dangerText}
          value={language === "eng" ? "Аккаунт" : "Аккаунт"}
        />
      </div>
    )
  },
)

export default AccountSettings
