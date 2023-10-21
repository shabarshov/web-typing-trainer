import React from "react"
import type { FC } from "react"

import type { PanelButtonProps } from "./PanelButtonProps"

import { Button, Text } from "components/UI"

import cn from "classnames"

import styles from "./PanelButton.module.scss"

const PanelButton: FC<PanelButtonProps> = ({ value, className, onClick }) => {
  return (
    <Button onClick={onClick} className={cn(styles.container, className)}>
      <Text className={styles.text} value={value} />
    </Button>
  )
}

export default PanelButton
