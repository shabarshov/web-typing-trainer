import type { FC } from "react"
import React from "react"

import type { WrapperContainerProps } from "./WrapperContainerProps"

import styles from "./WrapperContainer.module.scss"

const Wrapper: FC<WrapperContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Wrapper
