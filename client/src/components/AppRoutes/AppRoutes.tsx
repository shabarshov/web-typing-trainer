import type { FC } from "react"
import React from "react"

import { Routes, Route } from "react-router-dom"
import type { IRoute } from "routes/routes"
import { authRoutes } from "routes/routes"

const AppRoutes: FC = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }: IRoute) => (
        <Route key={path} path={path} element={Component} />
      ))}
    </Routes>
  )
}

export default AppRoutes
