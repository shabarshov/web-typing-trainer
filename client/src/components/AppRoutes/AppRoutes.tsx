import React, { FC } from "react"

import { Routes, Route } from "react-router-dom"
import { authRoutes, IRoute } from "routes/routes"

interface AppRoutesProps {}

const AppRoutes: FC<AppRoutesProps> = () => {
  return (
    <Routes>
      {authRoutes.map((elem: IRoute) => (
        <Route path={elem.path} element={elem.Component} />
      ))}
    </Routes>
  )
}

export default AppRoutes
