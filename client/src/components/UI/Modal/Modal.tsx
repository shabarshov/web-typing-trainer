import React from "react"
import type { FC } from "react"

import cn from "classnames"

import styles from "./Modal.module.scss"

interface ModalProps {
  className?: string
  children: JSX.Element[] | JSX.Element
}

const Modal: FC<ModalProps> = ({ className, children }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default Modal
