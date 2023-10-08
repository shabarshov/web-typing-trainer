import type { FC } from "react"
import React, { useState } from "react"
import cl from "./SettingsPage.module.scss"
import { DropDown } from "../../components/Dropdown/Dropdown"
import { Checkbox } from "../../components/Checkbox/Checkbox"
import { Slider } from "components/UI/Slider/Slider"
import Text from "components/UI/Text/Text"

const SettingsPage: FC = () => {
  const themes = ["светлая", "темная", "синия"]
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [isShowMistakes, setIsShowMistakes] = useState(false)
  const [musicLevel, setMusicLevel] = useState("50")

  return (
    <div className={cl.wrapper}>
      <div className={cl.navigation}>
        <nav>
          <ul>
            <li className={cl.active}>
              <p>General</p>
            </li>
            <li>
              <p>Account</p>
            </li>
            <li>
              <p>Text Settings</p>
            </li>
            <li>
              <p>Sounds</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className={cl.pages}>
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
        {/* <div className={cl.page}>
          <Slider value={musicLevel} setValue={setMusicLevel} />
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
          <p></p>
        </div> */}
      </div>
    </div>
  )
}

export default SettingsPage
