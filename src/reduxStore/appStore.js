import { configureStore } from '@reduxjs/toolkit'
import loggedInUserReducer from './loggedInUserSlice.js'

export const appStore = configureStore({
  reducer: {
    loggedInUser:loggedInUserReducer
  },
})