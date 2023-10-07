import React from "react"
import type { FC } from "react"

import type { LiItemProps } from "./LiItemProps"

import cn from "classnames"

import styles from "./LiItem.module.scss"

const LiItem: FC<LiItemProps> = ({ value, className, onClick }) => {
  return (
    <li className={cn(styles.liItem, className)} onClick={onClick}>
      {value}
    </li>
  )
}

export default LiItem
