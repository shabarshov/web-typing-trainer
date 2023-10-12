import { FC, useState } from "react"
import { CheckboxProps } from "./CheckboxProps"
import cl from "./Checkbox.module.scss"
import cn from "classnames"
import Checkmark from "assets/svg/Settings/Checkmark"
import Text from "../UI/Text/Text"
import { Square } from "../UI/Square/Square"
export const Checkbox: FC<CheckboxProps> = ({
  text,
  value,
  setValue,
  className,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const getStyle = () => {
    if (value && isHovered) return cn(cl.wrapper, cl.hover, cl.active)
    else if (isHovered) return cn(cl.wrapper, cl.hover)
    else if (value) return cn(cl.wrapper, cl.active)
    return cl.wrapper
  }

  return (
    <div
      style={style}
      className={getStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setValue(!value)}
    >
      <Square className={cl.square}>
        <Checkmark className={cl.checkMark} />
      </Square>
      <Text className={cl.description} value={text} />
    </div>
  )
}
