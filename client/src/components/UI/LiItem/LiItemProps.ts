import { MouseEvent } from "react"

interface LiItemProps {
  className?: string
  onClick?: (e: MouseEvent) => void
  value: string
}

export type { LiItemProps }
