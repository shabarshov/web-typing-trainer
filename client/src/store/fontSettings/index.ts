import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IFont } from "./types"

import { localStorageManager } from "utils"

const { getData, setData } = localStorageManager()

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

    close: (state) => {
      setData("fontSize", state.fontSize)
      setData("fontFamily", state.fontFamily)
    },
  },
})

export const { setFontSize, setFontFamily, close } = fontSettingsSlice.actions

export default fontSettingsSlice.reducer
