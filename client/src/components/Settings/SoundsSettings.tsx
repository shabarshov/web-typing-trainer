import React, { forwardRef } from "react"

import { Text } from "components/UI"
import RangeInput from "components/UI/RangeInput/RangeInput"
import Checkbox from "components/Checkbox/Checkbox"
import SoundsIcon from "assets/svg/Settings/SoundsIcon"

import { useAppDispatch, useAppSelector } from "hooks/storeHooks"

import { setSoundEnable, setSoundVolume } from "store/soundsSettings"

import styles from "./styles.module.scss"

const SoundsSettings = forwardRef<HTMLSpanElement>(
  function AccountSettings(props, ref) {
    const storeValues = useAppSelector((state) => state.settings.sounds)

    const language = useAppSelector(
      (state) => state.settings.workspace.interfaceLanguage,
    )

    const dispatch = useAppDispatch()

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <SoundsIcon className={styles.icon} />
          <Text
            ref={ref}
            className={styles.title}
            value={language === "eng" ? "Sounds" : "Звук"}
          />
        </div>
        <Checkbox
          textValue={language === "eng" ? "Enable sounds" : "Включить звук"}
          dispatch={() => dispatch(setSoundEnable(!storeValues.soundEnable))}
          initialValue={storeValues.soundEnable}
        />
        <RangeInput
          dispatch={(value) => dispatch(setSoundVolume(value))}
          initialValue={storeValues.soundVolume}
          min={0}
          max={100}
        />
      </div>
    )
  },
)

export default SoundsSettings
