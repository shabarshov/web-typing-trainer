import React, { FC } from "react"
import styles from "./Icon.module.css"

import { IconContext } from "react-icons/lib"

interface IconProps {
  icon: JSX.Element
  iconStyles: IconContext
}

const Icon: FC<IconProps> = ({ icon, iconStyles }) => {
  return <IconContext.Provider value={iconStyles}>{icon}</IconContext.Provider>
}

export default React.memo(Icon)
