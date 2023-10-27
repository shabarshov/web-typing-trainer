import React, { forwardRef } from "react"

import { Text } from "components/UI"
import Dropdown from "components/Dropdown/Dropdown"
import Checkbox from "components/Checkbox/Checkbox"
import CaretIcon from "assets/svg/Settings/CaretIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setBlinking, setCaretType, CaretType } from "store"

import { getEnumValues } from "utils"

import styles from "./styles.module.scss"

const CaretSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.caret)
    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <CaretIcon className={styles.icon} />
          <Text ref={ref} className={styles.title} value="Caret" />
        </div>
        <Checkbox
          dispatch={() => dispatch(setBlinking(!storeValues.blinking))}
          textValue="Blinking"
          initialValue={storeValues.blinking}
        />
        <Dropdown
          dispatch={(value) => dispatch(setCaretType(value))}
          initialTitle={storeValues.caretType}
        >
          {getEnumValues(CaretType).map((value, index) => (
            <Text className={styles.text} key={index} value={value} />
          ))}
        </Dropdown>
      </div>
    )
  },
)

export default CaretSettings
