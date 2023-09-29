import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  id: ''
}

export const modalOpen = createAsyncThunk('modal/user/update', (id) => {
  return id
})

export const modalClose = createAsyncThunk('modal/user/close', () => {
  return true
})

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    reset: (state) => {
      state.isOpen = false
      state.id = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(modalOpen.fulfilled, (state, action) => {
        state.isOpen = true
        state.id = action.payload
      })
      .addCase(modalClose.fulfilled, (state) => {
        state.isOpen = false
        state.id = false
      })
  }
})

export const { reset } = modalSlice.actions
export default modalSlice.reducer
