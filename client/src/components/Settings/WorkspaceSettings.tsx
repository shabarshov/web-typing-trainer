import React, { forwardRef } from "react"
import { useTranslation } from "react-i18next"

import { Text } from "components/UI"
import Dropdown from "components/Dropdown/Dropdown"
import WorkspaceIcon from "assets/svg/Settings/WorkspaceIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setInterfaceLanguage, InterfaceLanguage } from "store"

import { getEnumValues, getCurrentLanguageValue } from "utils"

import styles from "./styles.module.scss"

const WorkspaceSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.workspace)

    const language = useAppSelector(
      (state) => state.settings.workspace.interfaceLanguage,
    )

    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <WorkspaceIcon className={styles.icon} />
          <Text ref={ref} className={styles.title} value={t("Language")} />
        </div>
        <Dropdown
          dispatch={(value) => dispatch(setInterfaceLanguage(value))}
          initialTitle={getCurrentLanguageValue(
            storeValues.interfaceLanguage,
            language,
          )}
        >
          {getEnumValues(InterfaceLanguage).map((value, index) => (
            <Text className={styles.text} key={index} value={value} />
          ))}
        </Dropdown>
      </div>
    )
  },
)

export default WorkspaceSettings
