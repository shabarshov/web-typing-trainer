import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element[] | JSX.Element
  className?: string
}

export type { ButtonProps }
