import type { FC } from "react"
import React from "react"

import * as Icons from "assets/svg/Profile"
import Tooltip from "components/Tooltip/Tooltip"

import styles from "./ProfilePage.module.scss"

const ProfilePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <Icons.ProfileIcon className={styles.icon} />
        <div className={styles.personInfo}>
          <div>
            <Tooltip value="edit">
              <Icons.EditIcon className={styles.editIcon} />
            </Tooltip>
          </div>
          <div className={styles.login}>
            <span>VadimSex228</span>
          </div>

          <div className={styles.email}>
            <span>alexey_shabarshov@mail.ru</span>
          </div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>Joined</h2>
          <span>18.09.2023</span>
        </div>

        <div className={styles.card}>
          <h2>Best speed</h2>
          <span>643</span>
        </div>

        <div className={styles.card}>
          <h2>Average speed</h2>
          <span>531</span>
        </div>
      </div>

      <div className={styles.dangerZone}>
        <span>Danger Zone</span>
        <div className={styles.dangerField}>
          <span>Change password</span>
          <button>
            <span>Change</span>
          </button>
        </div>
        <div className={styles.dangerField}>
          <span>Delete account</span>
          <button>
            <span>Delete</span>
          </button>
        </div>
        <p className={styles.dangerInfo}>
          All changes in this zone that have entered into force cannot be
          canceled!
        </p>
      </div>
    </div>
  )
}

export default ProfilePage
