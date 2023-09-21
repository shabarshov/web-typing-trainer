import React, { FC } from "react"
import styles from "./App.module.scss"

import { Routes, Route } from "react-router-dom"

import Wrapper from "../Wrapper/Wrapper"

import AuthPage from "../../pages/AuthPage/AuthPage"
import HomePage from "../../pages/HomePage/HomePage"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
import SettingsPage from "../../pages/SettingsPage/SettingsPage"
import StatisticsPage from "../../pages/StatisticsPage/StatisticsPage"
import ProfilePage from "pages/ProfilePage/ProfilePage"

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/auth/SignIn"
            element={<AuthPage />}
          />
          <Route
            path="not-found"
            element={<NotFoundPage />}
          />
          <Route
            path="settings"
            element={<SettingsPage />}
          />
          <Route
            path="statistic"
            element={<StatisticsPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Wrapper>
    </div>
  )
}

export default App
