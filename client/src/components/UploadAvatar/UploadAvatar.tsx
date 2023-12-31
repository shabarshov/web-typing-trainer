import React, { useState, useRef } from "react"
import type { FC } from "react"
import { useTranslation } from "react-i18next"

import type { UploadAvatarProps } from "./UploadAvatarProps"

import UploadAvatarContainer from "components/containers/UploadAvatarContainer/UploadAvatarContainer"

import { Modal, Button, Text, Input } from "components/UI"
import CloseIcon from "assets/svg/Auth/CloseIcon"

import { setSrc } from "store"
import { useAppDispatch } from "hooks/storeHooks"

import useOutsideClick from "hooks/useOutsideClick"

import cn from "classnames"

import styles from "./UploadAvatar.module.scss"

const UploadAvatar: FC<UploadAvatarProps> = ({ setIsVisible }) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [preview, setPreview] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)

  useOutsideClick(() => setIsVisible(false), [containerRef])

  const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = 4 * 1024 * 1024

    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.match("image.*") &&
      e.target.files[0].size < size
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
    dispatch(setSrc(preview))
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
            <Text className={styles.labelText} value={t("Choose image")} />
          )}
          <Input
            type="file"
            accept="image/*"
            className={styles.file}
            onChange={onMainPhotoSelected}
          />
        </label>

        <Button className={styles.avatarBtn} onClick={confirmHandler}>
          <Text value={t("Submit")} className={styles.text} />
        </Button>
      </UploadAvatarContainer>
    </Modal>
  )
}

export default UploadAvatar
