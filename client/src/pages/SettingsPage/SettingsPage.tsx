import type { FC } from "react"
import React, { useState } from "react"
import cl from "./SettingsPage.module.scss"
import { DropDown } from "../../components/Dropdown/Dropdown"
import { Checkbox } from "./../../components/UI/Checkbox/Checkbox"

const SettingsPage: FC = () => {
  const themes = ["светлая", "темная", "синия"]
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [isShowMistakes, setIsShowMistakes] = useState(false)
  return (
    <div className={cl.wrapper}>
      <div className={cl.navigation}>
        <nav>
          <ul>
            <li>
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
        <div className={cl.generalPage}>
          <div className={cl.themeWrapper}>
            <p>select theme:</p>
            <DropDown
              className=""
              size={400}
              round={5}
              selected={selectedTheme}
              setSelected={setSelectedTheme}
              optionsObjects={themes}
            />
          </div>
          <div className={cl.showWrapper}>
            <Checkbox
              boxSize={28}
              fontSize={15}
              text="best checkbox"
              value={isShowMistakes}
              setValue={setIsShowMistakes}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
