import React from "react"
import type { FC } from "react"

import Card from "components/UI/Card/Card"
import Text from "components/UI/Text/Text"

import type { TitledCardProps } from "./TitledCardProps"

import cn from "classnames"

import styles from "./TitledCard.module.scss"

const TitledCard: FC<TitledCardProps> = ({ title, children, className }) => {
  return (
    <div className={styles.container}>
      <Card className={cn(styles.card, styles.top, className)}>
        <Text value={title} className={styles.test} />
      </Card>
      <Card className={cn(styles.card, styles.bottom, className)}>
        {children}
      </Card>
    </div>
  )
}

export default TitledCard
