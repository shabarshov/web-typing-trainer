import React from "react"
import type { FC } from "react"

import type { ModalProps } from "./ModalProps"

import cn from "classnames"

import styles from "./Modal.module.scss"

const Modal: FC<ModalProps> = ({ className, children }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default Modal
