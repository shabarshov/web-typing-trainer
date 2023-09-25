import React from "react"
import type { FC } from "react"

import { Routes, Route } from "react-router-dom"
import { authRoutes } from "routes/routes"

import type { IRoute } from "routes/routes"
import type { AppRoutesProps } from "./AppRoutesProps"

const AppRoutes: FC<AppRoutesProps> = ({ className }) => {
  return (
    <div className={className}>
      <Routes>
        {authRoutes.map(({ path, Component }: IRoute) => (
          <Route key={path} path={path} element={Component} />
        ))}
      </Routes>
    </div>
  )
}

export default AppRoutes
