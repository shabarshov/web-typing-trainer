import React, { forwardRef } from "react"

import type { ScrollableContainerProps } from "./ScrollableContainerProps"

import cn from "classnames"

import styles from "./ScrollableContainer.module.scss"

const ScrollableContainer = forwardRef<
  HTMLDivElement,
  ScrollableContainerProps
>(function ScrollableContainer(
  { children, className }: ScrollableContainerProps,
  ref,
) {
  return (
    <div ref={ref} className={cn(styles.container, className)}>
      {children}
    </div>
  )
})

export default ScrollableContainer
