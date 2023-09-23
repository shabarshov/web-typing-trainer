import React from "react"

import AuthPage from "pages/AuthPage/AuthPage"
import HomePage from "pages/HomePage/HomePage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import SettingsPage from "pages/SettingsPage/SettingsPage"
import StatisticsPage from "pages/StatisticsPage/StatisticsPage"
import ProfilePage from "pages/ProfilePage/ProfilePage"

export interface IRoute {
  path: string
  Component: React.ReactElement
}

export const authRoutes: IRoute[] = [
  {
    path: "/signIn",
    Component: <AuthPage />,
  },
  {
    path: "/settings",
    Component: <SettingsPage />,
  },
  {
    path: "/",
    Component: <HomePage />,
  },
  {
    path: "/statistics",
    Component: <StatisticsPage />,
  },
  {
    path: "/signUp",
    Component: <AuthPage />,
  },
  {
    path: "/profile",
    Component: <ProfilePage />,
  },
  {
    path: "/profile",
    Component: <ProfilePage />,
  },
  {
    path: "*",
    Component: <NotFoundPage />,
  },
]
