import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IWorkspace } from "./types"

import { localStorageManager } from "utils"

const { getData, setData } = localStorageManager()

export const workspaceSettingsSlice = createSlice({
  name: "workspaceSettingsSlice",

  initialState: {
    showTimer: getData("showTimer", false),
    showCountOfMistakes: getData("setShowCountOfMistakes", false),
    interfaceLanguage: getData("interfaceLanguage", "english"),
  } as IWorkspace,

  reducers: {
    setShowTimer: (state, action: PayloadAction<boolean>) => {
      state.showTimer = action.payload
    },

    setShowCountOfMistakes: (state, action: PayloadAction<boolean>) => {
      state.showCountOfMistakes = action.payload
    },

    setInterfaceLanguage: (state, action: PayloadAction<string>) => {
      state.interfaceLanguage = action.payload
    },

    close: (state) => {
      setData("showTimer", state.showTimer)
      setData("setShowCountOfMistakes", state.showCountOfMistakes)
      setData("interfaceLanguage", state.interfaceLanguage)
    },
  },
})

export const {
  setShowTimer,
  setShowCountOfMistakes,
  setInterfaceLanguage,
  close,
} = workspaceSettingsSlice.actions

export default workspaceSettingsSlice.reducer
