import type { Dispatch, SetStateAction } from "react"

interface ModalProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export type { ModalProps }
