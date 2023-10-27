import { configureStore, combineReducers } from "@reduxjs/toolkit"

import {
  accountSettingsSlice,
  caretSettingsSlice,
  fontSettingsSlice,
  soundsSettingsSlice,
  themeSettingsSlice,
  workspaceSettingsSlice,
  avatarSlice,
} from "./index"

const reducer = {
  settings: combineReducers({
    account: accountSettingsSlice,
    caret: caretSettingsSlice,
    font: fontSettingsSlice,
    sounds: soundsSettingsSlice,
    theme: themeSettingsSlice,
    workspace: workspaceSettingsSlice,
  }),

  avatar: avatarSlice,
}

const store = configureStore({
  reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
