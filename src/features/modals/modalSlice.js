import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  id: '',
  dataRole: ''
}

export const modalOpen = createAsyncThunk('modal/update', (data) => {
  console.log('paso')
  return data
})

export const modalClose = createAsyncThunk('modal/close', () => {
  return true
})

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    reset: (state) => {
      state.isOpen = false
      state.id = ''
      state.dataRole = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(modalOpen.fulfilled, (state, action) => {
        state.isOpen = true
        state.id = action.payload
        state.dataRole = action.payload
      })
      .addCase(modalClose.fulfilled, (state) => {
        state.isOpen = false
        state.id = false
        state.dataRole = ''
      })
  }
})

export const { reset } = modalSlice.actions
export default modalSlice.reducer
