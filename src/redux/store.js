import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/cartslice'

export  const store = configureStore({
  reducer: {
    cart : CartSlice
  },
})