import React from "react"
import type { FC } from "react"

import { NavLink } from "react-router-dom"

import * as Icons from "assets/svg/Wrapper"
import ToolTip from "components/Tooltip/Tooltip"

import cn from "classnames"

import styles from "./NavBar.module.scss"
import { useAppSelector } from "hooks/storeHooks"

const NavBar: FC = () => {
  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  const className = ({ isActive }: { isActive: boolean }): string => {
    return cn(isActive ? styles.active : "", styles.icon)
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Icons.LogoIcon className={styles.logo} />
        <NavLink to="/" className={className}>
          <ToolTip value={language === "eng" ? "Home" : "Домой"}>
            <Icons.HomeIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/statistic" className={className}>
          <ToolTip value={language === "eng" ? "Rating" : "Рейтинг"}>
            <Icons.RatingIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/settings" className={className}>
          <ToolTip value={language === "eng" ? "Settings" : "Настройки"}>
            <Icons.SettingsIcon className={styles.gearIcon} />
          </ToolTip>
        </NavLink>
      </div>
      <div className={styles.right}>
        <NavLink to="/profile" className={className}>
          <ToolTip value={language === "eng" ? "Profile" : "Профиль"}>
            <Icons.ProfileIcon />
          </ToolTip>
        </NavLink>
        <ToolTip value={language === "eng" ? "Sign out" : "Выйти"}>
          <Icons.SignOutIcon className={styles.icon} />
        </ToolTip>
      </div>
    </header>
  )
}

export default NavBar
