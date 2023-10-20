import type { Dispatch, SetStateAction } from "react"

interface UploadAvatarProps {
  setAvatar: Dispatch<SetStateAction<string>>
  setIsVisible: Dispatch<SetStateAction<boolean>>
}

export type { UploadAvatarProps }
