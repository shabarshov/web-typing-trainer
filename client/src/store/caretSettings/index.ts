import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { ICaret } from "./types"

import { localStorageManager } from "utils"

const { getData, setData } = localStorageManager()

export const caretSettingsSlice = createSlice({
  name: "caretSettingsSlice",

  initialState: {
    caretType: getData("caretType", "default"),
    blinking: getData("blinking", false),
  } as ICaret,

  reducers: {
    setCaretType: (state, action: PayloadAction<string>) => {
      state.caretType = action.payload
    },

    setBlinking: (state, action: PayloadAction<boolean>) => {
      state.blinking = action.payload
    },

    close: (state) => {
      setData("caretType", state.caretType)
      setData("blinking", state.blinking)
    },
  },
})

export const { setCaretType, setBlinking, close } = caretSettingsSlice.actions

export default caretSettingsSlice.reducer
