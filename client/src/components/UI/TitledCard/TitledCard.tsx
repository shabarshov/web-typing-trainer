import type { FC } from "react"
import React from "react"
import cn from "classnames"

import type { TitledCardProps } from "./TitledCardProps"

import styles from "./TitledCard.module.scss"

const TitledCard: FC<TitledCardProps> = ({ className, children }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.title}>{children[0]}</div>
      <div className={styles.content}>{children.slice(1)}</div>
    </div>
  )
}

export default TitledCard
