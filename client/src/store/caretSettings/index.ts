import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { ICaret } from "./types"

import { localStorageManager } from "utils"

const { getData } = localStorageManager()

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
  },
})

export const { setCaretType, setBlinking } = caretSettingsSlice.actions

export default caretSettingsSlice.reducer
