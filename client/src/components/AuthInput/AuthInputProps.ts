import type { InputProps } from "components/UI/Input/InputProps"
import type { Dispatch, SetStateAction } from "react"

interface AuthInputProps extends InputProps {
  state: string
  setState: Dispatch<SetStateAction<string>>
  title?: string
}

export type { AuthInputProps }
