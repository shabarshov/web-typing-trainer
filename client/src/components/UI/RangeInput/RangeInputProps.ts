import type { InputHTMLAttributes } from "react"

interface RangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue: string
  min?: number
  max?: number
  dispatch?: (value: string) => void
}

export type { RangeInputProps }
