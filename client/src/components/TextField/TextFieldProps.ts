import type { Dispatch, SetStateAction } from "react"
import type { ITextWrapper } from "utils/types"

interface TextFieldProps {
  setCaretPosition: Dispatch<SetStateAction<{ left: string; top: string }>>
  text: ITextWrapper
}

export type { TextFieldProps }
