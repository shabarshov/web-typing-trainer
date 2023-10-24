import React, { forwardRef } from "react"

import { Text } from "components/UI"
import Dropdown from "components/Dropdown/Dropdown"
import Checkbox from "components/Checkbox/Checkbox"
import WorkspaceIcon from "assets/svg/Settings/WorkspaceIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import {
  setShowTimer,
  setShowCountOfMistakes,
  setInterfaceLanguage,
  InterfaceLanguage,
} from "store"

import { getEnumValues } from "utils"

import styles from "./styles.module.scss"

const WorkspaceSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.workspaceSettingsSlice)
    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <WorkspaceIcon className={styles.icon} />
          <Text ref={ref} className={styles.title} value="Workspace" />
        </div>
        <Checkbox
          dispatch={() => dispatch(setShowTimer(!storeValues.showTimer))}
          textValue="Show timer"
          initialValue={storeValues.showTimer}
        />
        <Checkbox
          dispatch={() =>
            dispatch(setShowCountOfMistakes(!storeValues.showCountOfMistakes))
          }
          textValue="Show count of mistakes"
          initialValue={storeValues.showCountOfMistakes}
        />
        <Dropdown
          dispatch={(value) => dispatch(setInterfaceLanguage(value))}
          initialTitle={storeValues.interfaceLanguage}
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
