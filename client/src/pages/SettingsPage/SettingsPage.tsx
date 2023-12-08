import React, { useRef } from "react"
import type { FC } from "react"

import SettingsNavigation from "components/SettingsNavigation/SettingsNavigation"
import ScrollableContainer from "components/containers/ScrollableContainer/ScrollableContainer"

import * as Settings from "components/Settings"

import useRefs from "hooks/useRefs"

import { useAppSelector } from "hooks/storeHooks"

import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { refs } = useRefs<HTMLSpanElement>(6)

  const language = useAppSelector(
    (state) => state.settings.workspace.interfaceLanguage,
  )

  const scrollHandler = (index: number) => {
    const ref = refs[index].current

    if (scrollRef.current && ref) {
      scrollRef.current.scrollTo({
        top: ref.offsetTop - 60,
        left: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className={styles.container}>
      <SettingsNavigation
        scrollHandler={scrollHandler}
        items={
          language === "eng"
            ? ["Language", "Theme", "Font", "Caret", "Sounds", "Account"]
            : ["Язык", "Тема", "Шрифт", "Каретка", "Звук", "Аккаунт"]
        }
      />

      <ScrollableContainer
        ref={scrollRef}
        className={styles.scrollableContainer}
      >
        <div className={styles.ltr}>
          <Settings.WorkspaceSettings ref={refs[0]} />
          <Settings.ThemeSettings ref={refs[1]} />
          <Settings.FontSettings ref={refs[2]} />
          <Settings.CaretSettings ref={refs[3]} />
          <Settings.SoundsSettings ref={refs[4]} />
          <Settings.AccountSettings ref={refs[5]} />
        </div>
      </ScrollableContainer>
    </div>
  )
}

export default SettingsPage
