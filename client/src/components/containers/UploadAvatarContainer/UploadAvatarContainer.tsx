import React, { forwardRef } from "react"

import type { UploadFileContainerProps } from "./UploadAvatarContainerProps"

import styles from "./UploadAvatarContainer.module.scss"

const UploadFileContainer = forwardRef<
  HTMLDivElement,
  UploadFileContainerProps
>(function UploadAvatarContainer(props, ref) {
  return (
    <div className={styles.container} ref={ref}>
      {props.children}
    </div>
  )
})

export default UploadFileContainer
