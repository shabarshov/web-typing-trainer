import type { Dispatch, SetStateAction } from "react"

interface TextFieldProps {
  setCaretPosition: Dispatch<SetStateAction<{ left: string; top: string }>>
}

export type { TextFieldProps }
