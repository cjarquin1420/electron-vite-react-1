import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAlert {
  title: string
  message: string
  isOpen?: boolean
  onOk?: () => void
  okText?: string
  cancelText?: string
  onCancel?:() => void
}

const initialState: IAlert = {
    title: '',
    message: '',
    isOpen: false,
    okText: 'ok',
    cancelText: undefined,
    onOk: undefined
}

export const alertSlice = createSlice({
  name: 'alertReducer',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Omit<IAlert, 'isOpen'>>) => {
        state = {
            ...state,
            ...action.payload,
            isOpen: true
        }
        
        return state
    },
    close: (state) => {
        state = initialState
        return state
    }
  },
})

export const { open, close } = alertSlice.actions

export default alertSlice.reducer