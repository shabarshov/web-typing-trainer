import React from "react"
import type { FC } from "react"

import type { UploadFileContainerProps } from "./UploadAvatarContainerProps"

import styles from "./UploadAvatarContainer.module.scss"

const UploadFileContainer: FC<UploadFileContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default UploadFileContainer
