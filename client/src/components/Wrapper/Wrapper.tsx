import React, { FC } from "react"

import { Link } from "react-router-dom"

import Icon from "components/Icon/Icon"
import { headerIconStyles } from "assets/icons/iconStyles"
import { BsHouse, BsGear, BsGraphUp } from "assets/icons/reactIcons"

import styles from "./Wrapper.module.scss"

interface WrapperProps {
  children: JSX.Element[] | JSX.Element
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Link to="/">
          <Icon
            icon={<BsHouse />}
            iconStyles={headerIconStyles}
          />
        </Link>
        <Link to="/settings">
          <Icon
            icon={<BsGear />}
            iconStyles={headerIconStyles}
          />
        </Link>
        <Link to="/statistic">
          <Icon
            icon={<BsGraphUp />}
            iconStyles={headerIconStyles}
          />
        </Link>
      </header>
      <div className={styles.page}>{children}</div>
    </div>
  )
}

export default Wrapper
