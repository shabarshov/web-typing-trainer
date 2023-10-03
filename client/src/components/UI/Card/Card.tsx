import React from "react"
import type { FC } from "react"

import type { CardProps } from "./CardProps"

import cn from "classnames"

import styles from "./Card.module.scss"

const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default Card
