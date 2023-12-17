import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "react-query"

import { Provider } from "react-redux"
import store from "store/store"

import { BrowserRouter } from "react-router-dom"

import App from "./components/App/App"

import "./utils/i18n"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import "index.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={true}
          theme="colored"
        />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </Provider>,
)
