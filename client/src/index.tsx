import React from "react"
import ReactDOM from "react-dom/client"

import { Provider } from "react-redux"
import store from "store/store"

import { BrowserRouter } from "react-router-dom"

import App from "./components/App/App"

import "index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
