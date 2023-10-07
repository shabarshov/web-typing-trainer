import type { FC } from "react"
import React from "react"
import type IconProps from "../iconProps"

const DropdownArrow: FC<IconProps> = ({ className }) => {
  return (
    // <svg
    //   className={className}
    //   stroke="currentColor"
    //   fill="currentColor"
    //   strokeWidth="0"
    //   viewBox="5.8 5.9 12 12"
    //   // viewport="100 100"
    //   height="42px"
    //   width="42px"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
    // </svg>
    <svg
      className={className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      // viewport="100 100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7.26 8.84 9.49 6.66"
    >
      {" "}
      <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>{" "}
    </svg>
  )
}

export default DropdownArrow
