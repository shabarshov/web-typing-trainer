import React from "react"
import type { FC } from "react"
import type IconProps from "../iconProps"

const CheckmarkIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="32px"
      width="32px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="44"
        d="M416 128L192 384l-96-96"
      ></path>
    </svg>
  )
}

export default CheckmarkIcon
