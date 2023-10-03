import React from "react"
import type { FC } from "react"

import type { ScrollableContainerProps } from "./ScrollableContainerProps"

import cn from "classnames"

import styles from "./ScrollableContainer.module.scss"

const ScrollableContainer: FC<ScrollableContainerProps> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default ScrollableContainer
