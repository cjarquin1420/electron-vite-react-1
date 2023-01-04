import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './slice/alert'

export const UIStore = configureStore({
  reducer: {
    alertReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    })
  },
})

export type UIRootState = ReturnType<typeof UIStore.getState>
export type UIAppDispatch = typeof UIStore.dispatch