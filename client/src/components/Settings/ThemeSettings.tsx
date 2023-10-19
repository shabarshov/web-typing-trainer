import React, { forwardRef } from "react"

import Text from "components/UI/Text/Text"
import Dropdown from "components/Dropdown/Dropdown"
import RangeInput from "components/UI/RangeInput/RangeInput"
import Checkbox from "components/Checkbox/Checkbox"

import styles from "./styles.module.scss"

const ThemeSettings = forwardRef<HTMLSpanElement>(
  function ThemeSettings(props, ref) {
    return (
      <>
        <Text ref={ref} className={styles.title} value="Theme" />
        <Dropdown>
          <Text value="Item 1" />
          <Text value="Item 2" />
          <Text value="Item 3" />
        </Dropdown>
        <RangeInput initialValue="50" />
        <RangeInput initialValue="70" />
        <Checkbox textValue="Enable function" initialValue={false} />
      </>
    )
  },
)

export default ThemeSettings