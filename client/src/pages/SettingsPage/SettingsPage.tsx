import type { FC } from "react"
import React, { useState } from "react"
import cl from "./SettingsPage.module.scss"
import LiItem from "components/UI/LiItem/LiItem"
import UlItem from "components/UI/UlItem/UlItem"
import cn from "classnames"
import SettingSectionContainer from "components/SettingSection/SettingSection"

const SettingsPage: FC = () => {
  const settingOptions = [
    { num: 0, value: "General" },
    { num: 1, value: "Account" },
    { num: 2, value: "Text Settings" },
    { num: 3, value: "Sounds" },
  ]
  const [selectedSettingOption, setSelectedSettingOption] = useState(
    settingOptions[0],
  )
  const themes = ["светлая", "темная", "синия"]
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [isShowMistakes, setIsShowMistakes] = useState(false)
  const [musicLevel, setMusicLevel] = useState("50")

  const settingSection = [
    { type: "dropdown", title: "select theme: " },
    { type: "checkbox", title: "show mistakes " },
    { type: "slider", title: "background music: " },
    { type: "dropdown", title: "select fontsize: " },
  ]

  const onSettingClick = (e: React.MouseEvent) => {
    const evnt = e.target as HTMLElement
    setSelectedSettingOption(
      settingOptions.find((opt) => opt.value == evnt.innerText)!,
    )
  }

  const settingOptionsJSX = settingOptions.map((option) => (
    <LiItem
      key={option.num}
      className={
        selectedSettingOption.num == option.num ? cn(cl.active, cl.li) : cl.li
      }
      onClick={onSettingClick}
      value={option.value}
    />
  ))

  const getNumMove = () => -selectedSettingOption.num * 607 + "px"
  return (
    <div className={cl.wrapper}>
      <div className={cl.navigation}>
        <UlItem>{settingOptionsJSX}</UlItem>
      </div>

      <div className={cl.pagesWrapper}>
        <div
          className={cl.pages}
          style={{ transform: `translate(0px, ${getNumMove()})` }}
        >
          <SettingSectionContainer options={settingSection} />
          <SettingSectionContainer options={settingSection} />
          <SettingSectionContainer options={settingSection} />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
