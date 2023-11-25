import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IFont } from "./types"

import { localStorageManager } from "utils"
import { DEFAULT_FONT_SIZE, SYMBOL_HEIGHT, SYMBOL_WIDTH } from "constants/sizes"

const { getData } = localStorageManager()

export const fontSettingsSlice = createSlice({
  name: "fontSettingsSlice",

  initialState: {
    fontSize: getData("fontSize", "32"),
    fontFamily: getData("fontFamily", "Default"),
    symbolWidth:
      (SYMBOL_WIDTH * parseInt(getData("fontSize", "32"))) / DEFAULT_FONT_SIZE,
    symbolHeight:
      (SYMBOL_HEIGHT * parseInt(getData("fontSize", "32"))) / DEFAULT_FONT_SIZE,
  } as IFont,

  reducers: {
    setFontSize: (state, action: PayloadAction<string>) => {
      state.fontSize = action.payload

      state.symbolWidth =
        (SYMBOL_WIDTH * parseInt(action.payload)) / DEFAULT_FONT_SIZE

      state.symbolHeight =
        (SYMBOL_HEIGHT * parseInt(action.payload)) / DEFAULT_FONT_SIZE
    },

    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload
    },
  },
})

export const { setFontSize, setFontFamily } = fontSettingsSlice.actions

export default fontSettingsSlice.reducer
