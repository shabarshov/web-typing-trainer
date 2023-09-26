import type { MouseEvent, CSSProperties } from "react"

interface ButtonProps {
  className?: string
  value?: string
  style?: CSSProperties
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export type { ButtonProps }
