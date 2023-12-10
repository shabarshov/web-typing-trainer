import React from "react"

import AuthPage from "pages/AuthPage/AuthPage"
import HomePage from "pages/HomePage/HomePage"
import SettingsPage from "pages/SettingsPage/SettingsPage"
import StatisticsPage from "pages/StatisticsPage/StatisticsPage"
import ProfilePage from "pages/ProfilePage/ProfilePage"

export interface IRoute {
  path: string
  Component: React.ReactElement
}

export const notAuthRoutes: IRoute[] = [
  {
    path: "*",
    Component: <AuthPage />,
  },
]

export const authRoutes: IRoute[] = [
  {
    path: "/settings",
    Component: <SettingsPage />,
  },
  {
    path: "*",
    Component: <HomePage />,
  },
  {
    path: "/statistics",
    Component: <StatisticsPage />,
  },
  {
    path: "/profile",
    Component: <ProfilePage />,
  },
  {
    path: "/profile",
    Component: <ProfilePage />,
  },
]
