import { useRef, useState } from "react"
import type { FC, MouseEvent } from "react"

import Text from "components/UI/Text/Text"

import cn from "classnames"

import type { TooltipProps } from "./TooltipProps"

import styles from "./Tooltip.module.scss"

const Tooltip: FC<TooltipProps> = ({
  children,
  value,
  className,
}): JSX.Element => {
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
        ref={contentRef}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        {children}
      </div>

      {isVisible ? (
        <Text
          value={value}
          className={cn(styles.tooltip, className)}
          style={{ left: tooltipPosition }}
        />
      ) : null}
    </div>
  )
}

export default Tooltip
