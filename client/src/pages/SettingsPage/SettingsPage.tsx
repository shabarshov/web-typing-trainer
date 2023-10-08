import type { FC } from "react"
import React, { useState } from "react"
import cl from "./SettingsPage.module.scss"
import { DropDown } from "../../components/Dropdown/Dropdown"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Slider } from "components/UI/Slider/Slider"

const SettingsPage: FC = () => {
  const themes = ["светлая", "темная", "синия"]
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [isShowMistakes, setIsShowMistakes] = useState(false)
  const [musicLevel, setMusicLevel] = useState("50")
  const settingOptions = [
    { num: 0, value: "General" },
    { num: 1, value: "Account" },
    { num: 2, value: "Text Settings" },
    { num: 3, value: "Sounds" },
  ]
  const [selectedSettingOption, setSelectedSettingOption] = useState(
    settingOptions[0],
  )

  const onSettingClick = (e: React.MouseEvent) => {
    const evnt = e.target as HTMLElement
    setSelectedSettingOption(
      settingOptions.find((opt) => opt.value == evnt.innerText)!,
    )
  }

  const getNumMove = () => -selectedSettingOption.num * 607 + "px"
  return (
    <div className={cl.wrapper}>
      <div className={cl.navigation}>
        <nav>
          <ul>
            <li
              className={selectedSettingOption.num == 0 ? cl.active : null}
              onClick={onSettingClick}
            >
              General
            </li>
            <li
              className={selectedSettingOption.num == 1 ? cl.active : null}
              onClick={onSettingClick}
            >
              Account
            </li>
            <li
              className={selectedSettingOption.num == 2 ? cl.active : null}
              onClick={onSettingClick}
            >
              Text Settings
            </li>
            <li
              className={selectedSettingOption.num == 3 ? cl.active : null}
              onClick={onSettingClick}
            >
              Sounds
            </li>
          </ul>
        </nav>
      </div>

      <div className={cl.pagesWrapper}>
        <div
          className={cl.pages}
          style={{ transform: `translate(0px, ${getNumMove()})` }}
        >
          <div className={cl.page}>
            <div className={cl.themeWrapper}>
              <p className={cl.descript}>select theme:</p>
              <DropDown
                className={cl.dropdown}
                size={400}
                round={5}
                selected={selectedTheme}
                setSelected={setSelectedTheme}
                optionsObjects={themes}
              />
            </div>
            <div className={cl.showWrapper}>
              <Checkbox
                // boxSize={28}
                // fontSize={15}
                className=""
                text="best checkbox"
                value={isShowMistakes}
                setValue={setIsShowMistakes}
              />
            </div>
            <Slider value={musicLevel} setValue={setMusicLevel} />
          </div>
          <div className={cl.page}>
            <Slider
              value={musicLevel}
              setValue={setMusicLevel}
              style={{ marginBottom: "30px" }}
            />
            <div className={cl.themeWrapper}>
              <p className={cl.descript}>select theme:</p>
              <DropDown
                className={cl.dropdown}
                size={400}
                round={5}
                selected={selectedTheme}
                setSelected={setSelectedTheme}
                optionsObjects={themes}
              />
            </div>
          </div>
          <div className={cl.page}>
            <p>3</p>
          </div>
          <div className={cl.page}>
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
