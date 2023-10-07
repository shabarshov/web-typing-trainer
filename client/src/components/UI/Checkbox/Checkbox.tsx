import { FC, useState } from "react"
import { CheckboxProps } from "./CheckboxProps"
import cl from "./Checkbox.module.scss"
import cn from "classnames"
import Checkmark from "assets/svg/Settings/Checkmark"
export const Checkbox: FC<CheckboxProps> = ({
  text,
  value,
  setValue,
  boxSize,
  fontSize,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const getStyle = () => {
    if (value && isHovered) return cn(cl.wrapper, cl.hover, cl.active)
    else if (isHovered) return cn(cl.wrapper, cl.hover)
    else if (value) return cn(cl.wrapper, cl.active)
    return cl.wrapper
  }
  const squareSize = boxSize + "px"
  const textSize = fontSize + "px"
  const markSize = fontSize - 2 + "px"
  return (
    <div
      className={getStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setValue(!value)}
    >
      <div
        className={cl.square}
        style={{ width: squareSize, height: squareSize }}
      >
        {/* <div className={cl.checkMark} style={{ fontSize: markSize }}>
          ✔
        </div> */}
        <Checkmark className={cl.checkMark} />
      </div>
      <p className={cl.description} style={{ fontSize: textSize }}>
        {text}
      </p>
    </div>
  )
}
