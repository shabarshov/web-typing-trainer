import React, { useState, useRef } from "react"
import type { FC } from "react"

import type { UploadAvatarProps } from "./UploadAvatarProps"

import UploadAvatarContainer from "components/containers/UploadAvatarContainer/UploadAvatarContainer"

import { Modal, Button, Text, Input } from "components/UI"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import cn from "classnames"

import styles from "./UploadAvatar.module.scss"
import useOutsideClick from "hooks/useOutsideClick"

const UploadAvatar: FC<UploadAvatarProps> = ({ setAvatar, setIsVisible }) => {
  const [preview, setPreview] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClick(() => setIsVisible(false), [containerRef])

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.match("image.*")
    ) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])

      reader.onload = () => {
        if (reader.result) {
          setPreview(reader.result as string)
        }
      }
    }
  }

  const closeHandler = () => {
    setIsVisible(false)
  }

  const confirmHandler = () => {
    setAvatar(preview)
    setIsVisible(false)
  }

  return (
    <Modal>
      <UploadAvatarContainer ref={containerRef}>
        <Button className={styles.closeButton} onClick={closeHandler}>
          <CloseIcon />
        </Button>

        <label className={cn(styles.upload, preview ? "" : styles.isEmpty)}>
          {preview ? (
            <img src={preview} className={styles.avatarImg} />
          ) : (
            "Choose image"
          )}
          <Input
            type="file"
            accept="image/*"
            className={styles.file}
            onChange={onMainPhotoSelected}
          />
        </label>

        <Button className={styles.avatarBtn} onClick={confirmHandler}>
          <Text value="Confirm" className={styles.text} />
        </Button>
      </UploadAvatarContainer>
    </Modal>
  )
}

export default UploadAvatar
