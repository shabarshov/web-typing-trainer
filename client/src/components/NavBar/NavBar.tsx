import React from "react"
import type { FC } from "react"

import * as Icons from "assets/svg/Wrapper"
import ToolTip from "components/Tooltip/Tooltip"

import { NavLink } from "react-router-dom"

import cn from "classnames"

import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
  const className = ({ isActive }: { isActive: boolean }): string => {
    return cn(isActive ? styles.active : "", styles.icon)
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Icons.LogoIcon className={styles.logo} />
        <NavLink to="/" className={className}>
          <ToolTip value="Home">
            <Icons.HomeIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/statistic" className={className}>
          <ToolTip value="Rating">
            <Icons.RatingIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/settings" className={className}>
          <ToolTip value="Settings">
            <Icons.SettingsIcon className={styles.gearIcon} />
          </ToolTip>
        </NavLink>
      </div>
      <div className={styles.right}>
        <NavLink to="/profile" className={className}>
          <ToolTip value="Profile">
            <Icons.ProfileIcon />
          </ToolTip>
        </NavLink>
        <ToolTip value="Sign out">
          <Icons.SignOutIcon className={styles.icon} />
        </ToolTip>
      </div>
    </header>
  )
}

export default NavBar
