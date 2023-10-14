import type { FC } from "react"
import React, { useState } from "react"
import cl from "./SettingsPage.module.scss"
import SettingSection from "components/SettingSection/SettingSection"
import SettingNavigation from "components/SettingNavigation/SettingNavigation"
import { Dropdown } from "./../../components/Dropdown/Dropdown"

const SettingsPage: FC = () => {
  const settingSections = [
    { num: 0, value: "General" },
    { num: 1, value: "Account" },
    { num: 2, value: "Text Settings" },
    { num: 3, value: "Sounds" },
  ]

  const [selectedSettingSection, setSelectedSettingSection] = useState(
    settingSections[0],
  )

  const settingOption = [
    { type: "dropdown", title: "select theme: " },
    { type: "checkbox", title: "show mistakes " },
    { type: "slider", title: "background music: " },
    { type: "dropdown", title: "select fontsize: " },
  ]

  const getNumMove = () => -selectedSettingSection.num * 607 + "px"

  return (
    <div className={cl.wrapper}>
      <SettingNavigation
        selectedSettingSection={selectedSettingSection}
        setSelectedSettingSection={setSelectedSettingSection}
        settingSections={settingSections}
      />

      <div className={cl.pagesWrapper}>
        <div
          className={cl.pages}
          style={{ transform: `translate(0px, ${getNumMove()})` }}
        >
          <SettingSection options={settingOption} />
          <SettingSection options={settingOption} />
          <SettingSection options={settingOption} />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
