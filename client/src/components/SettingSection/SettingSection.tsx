import { FC } from "react"
import { SettingSectionProps } from "./SettingSectionProps"
import cl from "./SettingSection.module.scss"
import { useState } from "react"
import { Dropdown } from "components/Dropdown/Dropdown"
import { Checkbox } from "components/Checkbox/Checkbox"
import { Slider } from "components/UI/Slider/Slider"
const SettingSectionContainer: FC<SettingSectionProps> = ({ options }) => {
  const themes = ["светлая", "темная", "синия"]
  const [selectedTheme, setSelectedTheme] = useState(themes[0])
  const [isShowMistakes, setIsShowMistakes] = useState(false)
  const [musicLevel, setMusicLevel] = useState("50")

  const settingOptions = options.map((option) => {
    switch (option.type) {
      case "dropdown":
        return (
          <Dropdown
            description={option.title}
            className={cl.dropdown}
            selected={selectedTheme}
            setSelected={setSelectedTheme}
            optionsObjects={themes}
            style={{ marginBottom: "30px" }}
          />
        )
        break
      case "checkbox":
        return (
          <Checkbox
            className=""
            text={option.title}
            value={isShowMistakes}
            setValue={setIsShowMistakes}
            style={{ marginBottom: "30px" }}
          />
        )
        break
      case "slider":
        return (
          <Slider
            description={option.title}
            value={musicLevel}
            setValue={setMusicLevel}
            style={{ marginBottom: "50px" }}
          />
        )
        break
    }
  })

  return <div className={cl.wrapper}>{settingOptions}</div>
}
export default SettingSectionContainer
