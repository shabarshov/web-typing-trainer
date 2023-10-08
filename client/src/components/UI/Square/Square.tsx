import { SquareProps } from "./SquareProps"
import { FC } from "react"
import cl from "./Square.module.scss"
import cn from "classnames"
export const Square: FC<SquareProps> = ({ className, children }) => {
  return <div className={cn(className, cl.sq)}>{children}</div>
}
