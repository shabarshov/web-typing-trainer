import type { CSSProperties } from "react"

interface ModalProps {
  className?: string
  style?: CSSProperties
  children: JSX.Element[] | JSX.Element
}

export type { ModalProps }
