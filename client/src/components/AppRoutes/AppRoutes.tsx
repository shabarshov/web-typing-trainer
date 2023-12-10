import React, { useEffect } from "react"
import type { FC } from "react"

import { Routes, Route } from "react-router-dom"
import { authRoutes, notAuthRoutes } from "routes/routes"

import { useAppSelector } from "hooks/storeHooks"

import type { IRoute } from "routes/routes"
import type { AppRoutesProps } from "./AppRoutesProps"

const AppRoutes: FC<AppRoutesProps> = ({ className }) => {
  const userId = useAppSelector((store) => store.settings.account.userId)

  useEffect(() => {
    console.log("Current userId:", userId)
  }, [userId])

  let routes = notAuthRoutes.map(({ path, Component }: IRoute) => (
    <Route key={path} path={path} element={Component} />
  ))

  if (userId !== "undefined") {
    routes = authRoutes.map(({ path, Component }: IRoute) => (
      <Route key={path} path={path} element={Component} />
    ))
  }

  return (
    <div className={className}>
      <Routes>{routes}</Routes>
    </div>
  )
}

export default AppRoutes
