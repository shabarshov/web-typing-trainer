import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IAvatar } from "./types"

export const avatarSlice = createSlice({
  name: "avatarSlice",

  initialState: {
    src: "",
  } as IAvatar,

  reducers: {
    setSrc: (state, action: PayloadAction<string>) => {
      state.src = action.payload
    },
  },
})

export const { setSrc } = avatarSlice.actions

export default avatarSlice.reducer
