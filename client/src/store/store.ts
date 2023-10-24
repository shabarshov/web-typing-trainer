import { configureStore } from "@reduxjs/toolkit"

import {
  accountSettingsSlice,
  caretSettingsSlice,
  fontSettingsSlice,
  soundsSettingsSlice,
  themeSettingsSlice,
  workspaceSettingsSlice,
  avatarSlice,
} from "./index"

const store = configureStore({
  reducer: {
    accountSettingsSlice,
    caretSettingsSlice,
    fontSettingsSlice,
    soundsSettingsSlice,
    themeSettingsSlice,
    workspaceSettingsSlice,

    avatarSlice,
  },
})

// const storeState = Object.values(store.getState())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
