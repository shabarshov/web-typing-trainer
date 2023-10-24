import type { FC } from "react"
import React from "react"
import type IconProps from "../iconProps"

const FontIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="36px"
      width="36px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M5 7v10"></path>
      <path d="M7 5h10"></path>
      <path d="M7 19h10"></path>
      <path d="M19 7v10"></path>
      <path d="M10 10h4"></path>
      <path d="M12 14v-4"></path>
    </svg>
  )
}

export default FontIcon
