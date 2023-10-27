import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IFont } from "./types"

import { localStorageManager } from "utils"

const { getData } = localStorageManager()

export const fontSettingsSlice = createSlice({
  name: "fontSettingsSlice",

  initialState: {
    fontSize: getData("fontSize", "10"),
    fontFamily: getData("fontFamily", "monospace"),
  } as IFont,

  reducers: {
    setFontSize: (state, action: PayloadAction<string>) => {
      state.fontSize = action.payload
    },

    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload
    },
  },
})

export const { setFontSize, setFontFamily } = fontSettingsSlice.actions

export default fontSettingsSlice.reducer
