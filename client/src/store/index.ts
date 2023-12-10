import accountSettingsSlice from "./accountSettings"
import caretSettingsSlice from "./caretSettings"
import fontSettingsSlice from "./fontSettings"
import soundsSettingsSlice from "./soundsSettings"
import themeSettingsSlice from "./themeSettings"
import workspaceSettingsSlice from "./workspaceSettings"
import avatarSlice from "./avatar"

import { setUsername, setPassword, setUserId } from "./accountSettings"
import { setCaretType, setBlinking } from "./caretSettings"
import { setFontSize, setFontFamily } from "./fontSettings"
import { setSoundEnable, setSoundVolume } from "./soundsSettings"
import { setTheme } from "./themeSettings"
import {
  setShowTimer,
  setShowCountOfMistakes,
  setInterfaceLanguage,
} from "./workspaceSettings"
import { setSrc } from "./avatar"

import { CaretType } from "./caretSettings/types"
import { FontFamily } from "./fontSettings/types"
import { Theme } from "./themeSettings/types"
import { InterfaceLanguage } from "./workspaceSettings/types"

export {
  accountSettingsSlice,
  caretSettingsSlice,
  fontSettingsSlice,
  soundsSettingsSlice,
  themeSettingsSlice,
  workspaceSettingsSlice,
  avatarSlice,
}

export {
  setUsername,
  setPassword,
  setUserId,
  setCaretType,
  setBlinking,
  setFontSize,
  setFontFamily,
  setSoundEnable,
  setSoundVolume,
  setTheme,
  setShowTimer,
  setShowCountOfMistakes,
  setInterfaceLanguage,
  setSrc,
}

export { CaretType, FontFamily, Theme, InterfaceLanguage }
