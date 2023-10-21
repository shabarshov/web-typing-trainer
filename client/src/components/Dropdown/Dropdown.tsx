import React, { useEffect, useState, useRef } from "react"
import type { FC } from "react"

import type { DropdownProps } from "./DropdownProps"

import { Text, Button, UlItem } from "components/UI"
import DropdownArrowIcon from "assets/svg/Settings/DropdownArrowIcon"

import cn from "classnames"

import styles from "./Dropdown.module.scss"
import useOutsideClick from "hooks/useOutsideClick"

const Dropdown: FC<DropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [titleValue, setTitleValue] = useState<string>(children[0].props.value)

  const ulRef = useRef<HTMLUListElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useOutsideClick(() => setIsOpen(false), [ulRef, buttonRef])

  const openClickHandler = () => {
    setIsOpen(!isOpen)
  }

  const setClickHandler = (value: string) => {
    setTitleValue(value)
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.container}>
      <Button
        ref={buttonRef}
        className={styles.title}
        onClick={openClickHandler}
      >
        <Text className={styles.titleText} value={titleValue} />
        <DropdownArrowIcon
          className={cn(styles.icon, isOpen ? styles.active : "")}
        />
      </Button>
      <UlItem
        ref={ulRef}
        className={cn(styles.content, isOpen ? styles.active : "")}
      >
        {children.map((value, index) => {
          return (
            <Button
              className={cn(styles.button, styles.li)}
              key={index}
              onClick={() => setClickHandler(value.props.value)}
            >
              {value}
            </Button>
          )
        })}
      </UlItem>
    </div>
  )
}

export default Dropdown
