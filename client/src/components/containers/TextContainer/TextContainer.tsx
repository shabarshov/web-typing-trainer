import React from "react"
import type { FC } from "react"

import type { TextContainerProps } from "./TextContainerProps"

import styles from "./TextContainer.module.scss"

const TextContainer: FC<TextContainerProps> = ({ children }) => {
  return (
    <div
      style={{ width: `${window.innerWidth - 200}px` }}
      className={styles.container}
    >
      {children}
    </div>
  )
}

export default TextContainer
