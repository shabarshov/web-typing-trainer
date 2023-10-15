import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: JSX.Element | JSX.Element[]
}

export type { ButtonProps }
