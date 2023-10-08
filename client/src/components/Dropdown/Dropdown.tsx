import { FC } from "react"
import React, { useState } from "react"
import cl from "./Dropdown.module.scss"
import cn from "classnames"
import { Selected } from "./DropdownProps"
import DropdownArrow from "assets/svg/Settings/DropdownArrow"

import LiItem from "../UI/LiItem/LiItem"
import UlItem from "../UI/UlItem/UlItem"
import Button from "../UI/Button/Button"
import Text from "../UI/Text/Text"

export const DropDown: FC<Selected> = ({
  selected,
  setSelected,
  optionsObjects,
  size,
  round,
  className,
}) => {
  const width = size + "px"
  const roundBtn = round + "px"
  const roundMenu = round * 2 + "px"
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
    <div className={cl.wrapper}>
      {isActive ? (
        <div className={cl.clickArea} onClick={clickArea}></div>
      ) : null}

      <div className={cl.select} style={{ width: width }}>
        <Button
          onClick={onSelectChange}
          className={cn(cl.selectBtn, className)}
          style={{ width: width }}
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
