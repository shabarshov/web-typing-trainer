import React, { useState, useRef, useEffect } from "react"
import type { FC } from "react"

import type { DropdownProps } from "./DropdownProps"

import { Text, Button, UlItem } from "components/UI"
import DropdownArrowIcon from "assets/svg/Settings/DropdownArrowIcon"

import { useAppSelector } from "hooks/storeHooks"

import useOutsideClick from "hooks/useOutsideClick"

import { getCurrentLanguageValue } from "utils"

import cn from "classnames"

import styles from "./Dropdown.module.scss"

const Dropdown: FC<DropdownProps> = ({ children, initialTitle, dispatch }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [titleValue, setTitleValue] = useState<string>(
    initialTitle || children[0].props.value,
  )

  const language = useAppSelector(
    (store) => store.settings.workspace.interfaceLanguage,
  )

  useEffect(() => {
    setTitleValue(initialTitle || children[0].props.value)
  }, [language])

  const ulRef = useRef<HTMLUListElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useOutsideClick(() => setIsOpen(false), [ulRef, buttonRef])

  const openClickHandler = () => {
    setIsOpen(!isOpen)
  }

  const setClickHandler = (value: string) => {
    setTitleValue(getCurrentLanguageValue(value, language))
    setIsOpen(!isOpen)
    if (dispatch) dispatch(value)
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
              <Text
                value={getCurrentLanguageValue(value.props.value, language)}
              />
              {/* {value} */}
            </Button>
          )
        })}
      </UlItem>
    </div>
  )
}

export default Dropdown
