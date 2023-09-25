import type { MouseEvent } from "react"

interface ButtonProps {
  className?: string
  value?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export type { ButtonProps }
