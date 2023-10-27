import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { ITheme } from "./types"

import { localStorageManager } from "utils"

const { getData } = localStorageManager()

export const themeSettingsSlice = createSlice({
  name: "themeSettingsSlice",

  initialState: {
    theme: getData("theme", "black"),
  } as ITheme,

  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = themeSettingsSlice.actions

export default themeSettingsSlice.reducer
