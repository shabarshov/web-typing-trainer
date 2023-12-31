import React, { useState, useRef, useLayoutEffect } from "react"
import type { FC, ChangeEvent } from "react"

import type { RangeInputProps } from "./RangeInputProps"

import { Text } from "components/UI"

import styles from "./RangeInput.module.scss"
import colors from "styles/colors.module.scss"

const RangeInput: FC<RangeInputProps> = ({
  initialValue,
  dispatch,
  min = 0,
  max = 100,
  ...props
}) => {
  const [value, setValue] = useState<string>(initialValue)
  const rangeRef = useRef<HTMLInputElement | null>(null)

  useLayoutEffect(() => {
    if (rangeRef.current) {
      const value = rangeRef.current.valueAsNumber

      const minMaxRatio = 100 / (max - min)

      rangeRef.current.style.background = `linear-gradient(to right, ${
        colors.white
      } ${(value - min) * minMaxRatio}%, ${colors.whiteGrey} ${
        (value - min) * minMaxRatio
      }%)`
    }
  }, [value])

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
    if (dispatch) dispatch(event.currentTarget.value)
  }

  return (
    <div className={styles.container}>
      <input
        ref={rangeRef}
        className={styles.input}
        type="range"
        value={value}
        onChange={onChangeHandler}
        min={min}
        max={max}
        {...props}
      />
      <Text className={styles.text} value={value} />
    </div>
  )
}

export default RangeInput
