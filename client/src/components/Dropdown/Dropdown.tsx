import { FC } from "react"
import React, { useState } from "react"
import cl from "./Dropdown.module.scss"
import cn from "classnames"
import { DropdownProps } from "./DropdownProps"
import DropdownArrow from "assets/svg/Settings/DropdownArrow"

import LiItem from "../UI/LiItem/LiItem"
import UlItem from "../UI/UlItem/UlItem"
import Button from "../UI/Button/Button"
import Text from "../UI/Text/Text"

export const Dropdown: FC<DropdownProps> = ({
  selected,
  setSelected,
  optionsObjects,
  className,
  description,
  style,
}) => {
  const [isActive, setIsActive] = useState(false)

  const onOptionChange = (e: React.MouseEvent) => {
    const event = e.target as HTMLElement
    setSelected(event.innerText)
    e.stopPropagation()
  }
  const onSelectChange = (e: React.MouseEvent) => {
    setIsActive(!isActive)
    e.stopPropagation()
  }

  const clickArea = () => {
    setIsActive(false)
  }

  const optionValues = () =>
    optionsObjects?.map((option: string, index: number) => (
      <LiItem
        key={index}
        className={cl.option}
        onClick={onOptionChange}
        value={option}
      />
    ))

  return (
    <div className={cl.wrapper} style={style}>
      {isActive ? (
        <div className={cl.clickArea} onClick={clickArea}></div>
      ) : null}

      <p className={cl.descript}>{description}</p>

      <div className={cl.select}>
        <Button
          onClick={onSelectChange}
          className={cn(cl.selectBtn, className)}
        >
          <Text value={selected} className={cn(cl.text, className)} />
          <DropdownArrow
            className={
              isActive
                ? cn(cl.icon, cl.active, className)
                : cn(cl.icon, className)
            }
          />
        </Button>

        <UlItem
          className={
            isActive
              ? cn(cl.menuList, cl.active, className)
              : cn(cl.menuList, className)
          }
        >
          {optionValues()}
        </UlItem>
      </div>
    </div>
  )
}
