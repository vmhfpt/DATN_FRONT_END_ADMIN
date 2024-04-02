import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WebState {
  nav: boolean
}

const initialState: WebState = {
  nav: true,
}

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
   
    changeShowNav: (state,action: PayloadAction<boolean> ) => {
      state.nav = action.payload;
    },
   
  },
})


export const { changeShowNav } = webSlice.actions

export default webSlice.reducer