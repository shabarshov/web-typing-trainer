import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { ITheme } from "./types"

import { localStorageManager } from "utils"

const { getData, setData } = localStorageManager()

export const themeSettingsSlice = createSlice({
  name: "themeSettingsSlice",

  initialState: {
    theme: getData("theme", "black"),
  } as ITheme,

  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    },

    close: (state) => {
      setData("theme", state.theme)
    },
  },
})

export const { setTheme, close } = themeSettingsSlice.actions

export default themeSettingsSlice.reducer
