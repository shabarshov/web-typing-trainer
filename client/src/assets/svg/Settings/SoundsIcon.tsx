import type { FC } from "react"
import React from "react"
import type IconProps from "../iconProps"

const ThemeIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="36px"
      width="36px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
      ></path>
    </svg>
  )
}

export default ThemeIcon