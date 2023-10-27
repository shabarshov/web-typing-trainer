import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IWorkspace } from "./types"

import { localStorageManager } from "utils"

const { getData } = localStorageManager()

export const workspaceSettingsSlice = createSlice({
  name: "workspaceSettingsSlice",

  initialState: {
    showTimer: getData("showTimer", false),
    showCountOfMistakes: getData("showCountOfMistakes", false),
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
  },
})

export const { setShowTimer, setShowCountOfMistakes, setInterfaceLanguage } =
  workspaceSettingsSlice.actions

export default workspaceSettingsSlice.reducer
