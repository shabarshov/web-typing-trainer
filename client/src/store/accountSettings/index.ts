import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IAccount } from "./types"

import { localStorageManager } from "utils"

const { getData, setData } = localStorageManager()

export const accountSettingsSlice = createSlice({
  name: "accountSettingsSlice",

  initialState: {
    username: getData("username", "undefined"),
    password: getData("password", "undefined"),
  } as IAccount,

  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },

    close: (state) => {
      setData("username", state.username)
      setData("password", state.password)
    },
  },
})

export const { setUsername, setPassword, close } = accountSettingsSlice.actions

export default accountSettingsSlice.reducer
