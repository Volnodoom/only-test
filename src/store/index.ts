import { configureStore } from '@reduxjs/toolkit'
import { animationSlice } from './reducer'

export const store = configureStore({
  reducer: animationSlice.reducer
})
