import type { InputHTMLAttributes } from "react"

interface RangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue: string
  dispatch?: (value: string) => void
}

export type { RangeInputProps }
