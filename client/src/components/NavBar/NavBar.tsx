import React from "react"
import type { FC } from "react"
import { useTranslation } from "react-i18next"

import { NavLink } from "react-router-dom"

import * as Icons from "assets/svg/Wrapper"
import ToolTip from "components/Tooltip/Tooltip"
import { Button } from "components/UI"

import { useAppDispatch } from "hooks/storeHooks"
import { setPassword, setUserId, setUsername } from "store"

import cn from "classnames"

import styles from "./NavBar.module.scss"

const NavBar: FC = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const className = ({ isActive }: { isActive: boolean }): string => {
    return cn(isActive ? styles.active : "", styles.icon)
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Icons.LogoIcon className={styles.logo} />
        <NavLink to="/" className={className}>
          <ToolTip value={t("Home")}>
            <Icons.HomeIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/statistic" className={className}>
          <ToolTip value={t("Rating")}>
            <Icons.RatingIcon />
          </ToolTip>
        </NavLink>
        <NavLink to="/settings" className={className}>
          <ToolTip value={t("Settings")}>
            <Icons.SettingsIcon className={styles.gearIcon} />
          </ToolTip>
        </NavLink>
      </div>
      <div className={styles.right}>
        <NavLink to="/profile" className={className}>
          <ToolTip value={t("Profile")}>
            <Icons.ProfileIcon />
          </ToolTip>
        </NavLink>

        <Button
          onClick={() => {
            dispatch(setUserId("undefined"))
            dispatch(setUsername("undefined"))
            dispatch(setPassword("undefined"))
          }}
        >
          <ToolTip value={t("Sign out")}>
            <Icons.SignOutIcon className={styles.icon} />
          </ToolTip>
        </Button>
      </div>
    </header>
  )
}

export default NavBar
