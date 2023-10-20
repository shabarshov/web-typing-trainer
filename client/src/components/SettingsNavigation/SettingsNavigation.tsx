import React from "react"
import type { FC, MouseEvent } from "react"

import type { SettingsNavigationProps } from "./SettingsNavigationProps"

import UlItem from "components/UI/UlItem/UlItem"
import Button from "components/UI/Button/Button"
import Text from "components/UI/Text/Text"

import useRefs from "hooks/useRefs"

import cn from "classnames"

import styles from "./SettingsNavigation.module.scss"

const SettingsNavigation: FC<SettingsNavigationProps> = ({
  items,
  scrollHandler,
}) => {
  const { refs } = useRefs<HTMLSpanElement>(items.length)

  const onClickHandler = (event: MouseEvent, index: number) => {
    refs.map((ref) => {
      if (ref.current) {
        ref.current.className = cn(styles.text)
        if (ref.current === event.target)
          ref.current.className = cn(styles.text, styles.active)
      }
    })
    scrollHandler(index)
  }

  const createLiItems = () =>
    items.map((value, index) => {
      return (
        <Button
          key={index}
          className={styles.button}
          onClick={(event: MouseEvent) => onClickHandler(event, index)}
        >
          <Text
            className={
              index === 0 ? cn(styles.text, styles.active) : styles.text
            }
            ref={refs[index]}
            value={value}
          />
        </Button>
      )
    })

  return <UlItem className={styles.container}>{createLiItems()}</UlItem>
}

export default SettingsNavigation
