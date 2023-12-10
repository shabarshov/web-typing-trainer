import type { Dispatch, SetStateAction } from "react"

interface TextPanelProps {
  textLength: number
  textType: "text" | "words"
  textLanguage: "ru" | "en"

  setTextLength: Dispatch<SetStateAction<number>>
  setTextType: Dispatch<SetStateAction<"text" | "words">>
  setTextLanguage: Dispatch<SetStateAction<"ru" | "en">>
}

export type { TextPanelProps }
