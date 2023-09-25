import { useRef, useState } from "react"
import type { FC, MouseEvent } from "react"

import type { TooltipProps } from "./TooltipProps"

import styles from "./Tooltip.module.scss"

const ToolTip: FC<TooltipProps> = ({ children, value }): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [tooltipPosition, setTooltipPosition] = useState<string>("")

  const contentRef = useRef<HTMLDivElement | null>(null)

  const onMouseEnterHandler = (event: MouseEvent) => {
    if (contentRef.current) {
      const { left } = contentRef.current.getBoundingClientRect()
      setTooltipPosition(event.clientX - left + "px")
      setIsVisible(true)
    }
  }

  const onMouseLeaveHandler = () => {
    setIsVisible(false)
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        ref={contentRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
      </div>

      {isVisible ? (
        <span className={styles.tooltip} style={{ left: tooltipPosition }}>
          {value}
        </span>
      ) : null}
    </div>
  )
}

export default ToolTip
