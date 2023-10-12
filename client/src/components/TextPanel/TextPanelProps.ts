import type { Dispatch, SetStateAction } from "react"

interface TextPanelProps {
  setTextLength: Dispatch<SetStateAction<number>>
  setTextType: Dispatch<SetStateAction<"text" | "words">>
}

export type { TextPanelProps }
