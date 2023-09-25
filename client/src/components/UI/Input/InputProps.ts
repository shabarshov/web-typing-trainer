import type { ChangeEvent } from "react"

interface InputProps {
  className?: string
  type?: "password" | "text"
  placeholder?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  spellCheck?: boolean
}

export type { InputProps }
