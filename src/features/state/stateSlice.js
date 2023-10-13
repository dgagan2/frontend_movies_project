import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import stateService from './stateService'

const initialState = {
  states: null,
  stateToEdit: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isOpen: false,
  message: ''
}

export const modalOpenState = createAsyncThunk('state/modal/update', (data) => {
  return data
})

export const modalCloseState = createAsyncThunk('state/modal/close', () => {
  return true
})

export const stateList = createAsyncThunk('state/list', async (thunkAPI) => {
  try {
    const response = await stateService.getAllState()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchState = createAsyncThunk('state/search', async (name, thunkAPI) => {
  try {
    const response = await stateService.getStateByName(name)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const newState = createAsyncThunk('state/add', async (name, thunkAPI) => {
  try {
    const response = await stateService.addState(name)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteState = createAsyncThunk('state/delete', async (id, thunkAPI) => {
  try {
    const response = await stateService.deleteState(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateState = createAsyncThunk('state/update', async (data, thunkAPI) => {
  try {
    const response = await stateService.updateState(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    resetState: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(stateList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(stateList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.states = action.payload
      })
      .addCase(stateList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(newState.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(newState.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(deleteState.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(deleteState.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(searchState.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.states = action.payload
      })
      .addCase(searchState.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(modalCloseState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isOpen = false
        state.stateToEdit = null
      })
      .addCase(modalOpenState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isOpen = true
        state.stateToEdit = action.payload
      })
      .addCase(updateState.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isOpen = false
        state.message = action.payload || 'Estado actualizado'
      })
      .addCase(updateState.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
})

export const { resetState } = stateSlice.actions
export default stateSlice.reducer
