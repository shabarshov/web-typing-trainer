import React, { forwardRef } from "react"

import { Text } from "components/UI"
import Dropdown from "components/Dropdown/Dropdown"
import RangeInput from "components/UI/RangeInput/RangeInput"
import FontIcon from "assets/svg/Settings/FontIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setFontFamily, setFontSize, FontFamily } from "store"

import { getEnumValues } from "utils"

import styles from "./styles.module.scss"

const FontSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.fontSettingsSlice)
    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <FontIcon className={styles.icon} />
          <Text ref={ref} className={styles.title} value="Font" />
        </div>
        <RangeInput
          dispatch={(value) => dispatch(setFontSize(value))}
          initialValue={storeValues.fontSize}
          min={0}
          max={100}
          step={2}
        />
        <Dropdown
          dispatch={(value) => dispatch(setFontFamily(value))}
          initialTitle={storeValues.fontFamily}
        >
          {getEnumValues(FontFamily).map((value, index) => (
            <Text className={styles.text} key={index} value={value} />
          ))}
        </Dropdown>
      </div>
    )
  },
)

export default FontSettings
