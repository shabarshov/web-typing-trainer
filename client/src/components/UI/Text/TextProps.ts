import type { CSSProperties } from "react"

interface TextProps {
  className?: string
  textCase?: "upper" | "lower"
  style?: CSSProperties
  value: string
}

export type { TextProps }
