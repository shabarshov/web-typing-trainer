import React, { useState } from "react"
import type { FC } from "react"

import type { CheckboxProps } from "./CheckboxProps"

import { Text } from "components/UI"
import CheckmarkIcon from "assets/svg/Settings/CheckmarkIcon"

import styles from "./Checkbox.module.scss"

const Checkbox: FC<CheckboxProps> = ({ textValue, initialValue }) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue)

  const onClickHandler = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className={styles.container}>
      <div onClick={onClickHandler} className={styles.checkbox}>
        {isEnabled ? <CheckmarkIcon className={styles.icon} /> : null}
      </div>
      <Text value={textValue} />
    </div>
  )
}

export default Checkbox
