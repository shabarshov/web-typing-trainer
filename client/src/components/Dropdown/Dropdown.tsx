import { FC } from "react"
import React, { useState } from "react"
import cl from "./DropDown.module.scss"
import cn from "classnames"
import { Selected } from "./DropDownProps"
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
        {/* <div
          style={{ borderRadius: roundBtn }}
          className={cl.selectBtn}
          onClick={onSelectChange}
        >
          <DropdownArrow
            className={isActive ? cn(cl.icon, cl.active) : cl.icon}
          />
        </div> */}

        <Button
          onClick={onSelectChange}
          className={cl.selectBtn}
          style={{ width: width }}
        >
          <Text value={selected} className={cl.text} />
          <DropdownArrow
            className={isActive ? cn(cl.icon, cl.active) : cl.icon}
          />
        </Button>

        <UlItem className={isActive ? cn(cl.menuList, cl.active) : cl.menuList}>
          {optionValues()}
        </UlItem>
      </div>
    </div>
  )
}
