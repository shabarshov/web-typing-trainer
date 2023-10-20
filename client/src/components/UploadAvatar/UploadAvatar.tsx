import React, { useState } from "react"
import type { FC } from "react"
import type { UploadAvatarProps } from "./UploadAvatarProps"

import Modal from "components/UI/Modal/Modal"
import Button from "components/UI/Button/Button"
import Text from "components/UI/Text/Text"
import UploadAvatarContainer from "components/containers/UploadAvatarContainer/UploadAvatarContainer"

import styles from "./UploadAvatar.module.scss"

const UploadAvatar: FC<UploadAvatarProps> = ({ getAvatar, setVisible }) => {
  const [preview, setPreview] = useState<string>("")

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])

      reader.onload = () => {
        if (reader.result != null) {
          setPreview(reader.result as string)
        }
      }
    } else {
      setPreview("")
    }
  }

  return (
    <Modal>
      <UploadAvatarContainer>
        {preview ? (
          <img src={preview} className={styles.avatarImg} />
        ) : (
          <label className={styles.upload}>
            Choose image
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              className={styles.file}
              onChange={onMainPhotoSelected}
            />
          </label>
        )}

        <div className={styles.buttonField}>
          <Button
            className={styles.avatarBtn}
            onClick={() => {
              setVisible(false)
            }}
          >
            <Text value="Close" className={styles.text} />
          </Button>
          <Button
            className={styles.avatarBtn}
            onClick={() => {
              getAvatar(preview)
              setVisible(false)
            }}
          >
            <Text value="Confirm" className={styles.text} />
          </Button>
        </div>
      </UploadAvatarContainer>
    </Modal>
  )
}

export default UploadAvatar
