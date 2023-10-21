import React, { useState } from "react"
import type { FC } from "react"

import type { UploadAvatarProps } from "./UploadAvatarProps"

import UploadAvatarContainer from "components/containers/UploadAvatarContainer/UploadAvatarContainer"

import { Modal, Button, Text, Input } from "components/UI"

import styles from "./UploadAvatar.module.scss"

const UploadAvatar: FC<UploadAvatarProps> = ({ setAvatar, setIsVisible }) => {
  const [preview, setPreview] = useState<string>("")

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
      <UploadAvatarContainer>
        <label className={styles.upload}>
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

        <div className={styles.buttonField}>
          <Button className={styles.avatarBtn} onClick={closeHandler}>
            <Text value="Close" className={styles.text} />
          </Button>
          <Button className={styles.avatarBtn} onClick={confirmHandler}>
            <Text value="Confirm" className={styles.text} />
          </Button>
        </div>
      </UploadAvatarContainer>
    </Modal>
  )
}

export default UploadAvatar
