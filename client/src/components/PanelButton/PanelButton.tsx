import React from "react"
import type { FC } from "react"

import type { PanelButtonProps } from "./PanelButtonProps"

import Button from "components/UI/Button/Button"
import Text from "components/UI/Text/Text"

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
