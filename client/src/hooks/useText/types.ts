import type { ITextWrapper } from "utils/types"

interface IUseText {
  text: ITextWrapper
  setText: (newText: string) => void
}

export type { IUseText }
