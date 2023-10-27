import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { ISounds } from "./types"

import { localStorageManager } from "utils"

const { getData } = localStorageManager()

export const soundsSettingsSlice = createSlice({
  name: "soundsSettingsSlice",

  initialState: {
    soundEnable: getData("soundEnable", false),
    soundVolume: getData("soundVolume", "0"),
  } as ISounds,

  reducers: {
    setSoundEnable: (state, action: PayloadAction<boolean>) => {
      state.soundEnable = action.payload
    },

    setSoundVolume: (state, action: PayloadAction<string>) => {
      state.soundVolume = action.payload
    },
  },
})

export const { setSoundEnable, setSoundVolume } = soundsSettingsSlice.actions

export default soundsSettingsSlice.reducer
