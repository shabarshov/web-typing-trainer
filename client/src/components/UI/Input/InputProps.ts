import type { ChangeEvent, CSSProperties } from "react"

interface InputProps {
  className?: string
  type?: "password" | "text"
  placeholder?: string
  value?: string
  style?: CSSProperties
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  spellCheck?: boolean
}

export type { InputProps }
