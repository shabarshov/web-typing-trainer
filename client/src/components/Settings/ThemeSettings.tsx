import React, { forwardRef } from "react"

import { Text } from "components/UI"
import Dropdown from "components/Dropdown/Dropdown"
import ThemeIcon from "assets/svg/Settings/ThemeIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { getEnumValues, getCurrentLanguageValue } from "utils"
import { Theme, setTheme } from "store"

import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"

const ThemeSettings = forwardRef<HTMLSpanElement>(
  function ThemeSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.theme)

    const language = useAppSelector(
      (state) => state.settings.workspace.interfaceLanguage,
    )

    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <ThemeIcon className={styles.icon} />
          <Text ref={ref} className={styles.title} value={t("Theme")} />
        </div>
        <Dropdown
          dispatch={(value) => dispatch(setTheme(value))}
          initialTitle={getCurrentLanguageValue(storeValues.theme, language)}
        >
          {getEnumValues(Theme).map((value, index) => (
            <Text className={styles.text} key={index} value={value} />
          ))}
        </Dropdown>
      </div>
    )
  },
)

export default ThemeSettings
