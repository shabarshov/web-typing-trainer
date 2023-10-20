import React, { forwardRef } from "react"

import type { UlItemProps } from "./UlItemProps"

import cn from "classnames"

import styles from "./UlItem.module.scss"

const UlItem = forwardRef<HTMLUListElement, UlItemProps>(function UlItem(
  { className, children, ...props }: UlItemProps,
  ref,
) {
  return (
    <ul className={cn(styles.ulItem, className)} ref={ref} {...props}>
      {children.map((value, index) => (
        <li className={styles.li} key={index}>
          {value}
        </li>
      ))}
    </ul>
  )
})

export default UlItem
