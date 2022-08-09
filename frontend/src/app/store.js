import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import bingReducer from '../features/bings/bingSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bings: bingReducer,
  },
})
