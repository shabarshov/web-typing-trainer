import React from "react"
import type { FC } from "react"

import * as Icons from "assets/svg/Wrapper"
import ToolTip from "components/Tooltip/Tooltip"

import { Link } from "react-router-dom"

import cn from "classnames"

import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Icons.LogoIcon className={styles.logo} />
        <Link to="/">
          <ToolTip value="Home">
            <Icons.HomeIcon className={styles.icon} />
          </ToolTip>
        </Link>
        <Link to="/statistic">
          <ToolTip value="Rating">
            <Icons.RatingIcon className={styles.icon} />
          </ToolTip>
        </Link>
        <Link to="/settings">
          <ToolTip value="Settings">
            <Icons.SettingsIcon
              className={cn(styles.icon, styles.gearRotate)}
            />
          </ToolTip>
        </Link>
      </div>
      <div className={styles.right}>
        <Link to="/profile">
          <ToolTip value="Profile">
            <Icons.ProfileIcon className={styles.icon} />
          </ToolTip>
        </Link>
        <ToolTip value="Sign out">
          <Icons.SignOutIcon className={styles.icon} />
        </ToolTip>
      </div>
    </header>
  )
}

export default NavBar
