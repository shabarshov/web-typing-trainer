import type { Dispatch, SetStateAction } from "react"

interface UploadAvatarProps {
  getAvatar: Dispatch<SetStateAction<string>>
  setVisible: Dispatch<SetStateAction<boolean>>
}

export type { UploadAvatarProps }
