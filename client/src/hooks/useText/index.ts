import { useState } from "react"
import { textWrapper } from "utils"

import type { ITextWrapper } from "utils/types"
import type { IUseText } from "./types"

const useText = (initialText: string): IUseText => {
  const [text, setText] = useState<ITextWrapper>(textWrapper(initialText))

  return {
    text: text,
    setText: (newText: string) => {
      setText(textWrapper(newText))
    },
  }
}

export default useText
