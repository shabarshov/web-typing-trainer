import React, { useRef } from "react"
import type { FC } from "react"

import SettingsNavigation from "components/SettingsNavigation/SettingsNavigation"
import ScrollableContainer from "components/containers/ScrollableContainer/ScrollableContainer"
import GeneralSettings from "components/Settings/GeneralSettings"
import AccountSettings from "components/Settings/AccountSettings"
import ThemeSettings from "components/Settings/ThemeSettings"

import useRefs from "hooks/useRefs"

import styles from "./SettingsPage.module.scss"

const SettingsPage: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { refs } = useRefs<HTMLSpanElement>(3)

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
        items={["General", "Account", "Theme"]}
      />

      <ScrollableContainer
        ref={scrollRef}
        className={styles.scrollableContainer}
      >
        <div className={styles.ltr}>
          <GeneralSettings ref={refs[0]} />
          <AccountSettings ref={refs[1]} />
          <ThemeSettings ref={refs[2]} />
        </div>
      </ScrollableContainer>
    </div>
  )
}

export default SettingsPage
