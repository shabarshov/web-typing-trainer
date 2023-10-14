import React from "react"
import type { FC } from "react"

import type { UlItemProps } from "./UlItemProps"

import cn from "classnames"

import styles from "./UlItem.module.scss"

const UlItem: FC<UlItemProps> = ({ className, children }) => {
  return <ul className={cn(styles.ulItem, className)}>{children}</ul>
}

export default UlItem
