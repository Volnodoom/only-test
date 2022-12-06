import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateType } from 'types/style.type';
import { ANIMATION_SLICE } from 'utils/const'

const initialState: StateType = {
  previousIndex: 0,
  activeIndex: 0,
}

export const animationSlice = createSlice({
  name: ANIMATION_SLICE,
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
    setPreviousIndex: (state, action: PayloadAction<number>) => {
      state.previousIndex = action.payload;
    }
  }
})

export const {
  setPreviousIndex,
  setActiveIndex,
} = animationSlice.actions;
