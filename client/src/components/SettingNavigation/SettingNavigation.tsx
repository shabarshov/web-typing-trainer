import { FC } from "react"
import { SettingNavigationProps } from "./SettingNavigationProps"
import LiItem from "components/UI/LiItem/LiItem"
import UlItem from "components/UI/UlItem/UlItem"
import cl from "./SettingNavigation.module.scss"
import cn from "classnames"
const SettingNavigation: FC<SettingNavigationProps> = ({
  settingSections,
  selectedSettingSection,
  setSelectedSettingSection,
}) => {
  const onSettingClick = (e: React.MouseEvent) => {
    const evnt = e.target as HTMLElement
    setSelectedSettingSection(
      settingSections.find((opt) => opt.value == evnt.innerText)!,
    )
  }

  const settingOptionsJSX = settingSections.map((option) => (
    <LiItem
      key={option.num}
      className={
        selectedSettingSection.num == option.num ? cn(cl.active, cl.li) : cl.li
      }
      onClick={onSettingClick}
      value={option.value}
    />
  ))

  return (
    <div className={cl.navigation}>
      <UlItem>{settingOptionsJSX}</UlItem>
    </div>
  )
}

export default SettingNavigation
