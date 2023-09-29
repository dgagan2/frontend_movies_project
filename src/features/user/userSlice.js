import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

const initialState = {
  users: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const userList = createAsyncThunk('users/list', async (data, thunkAPI) => {
  try {
    const response = await userService.getAllUsers(data.skip, data.limit)

    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchUserEmail = createAsyncThunk('users/search/email', async (email, thunkAPI) => {
  try {
    const response = await userService.searchUserByEmail(email)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchUserRole = createAsyncThunk('users/search/role', async (role, thunkAPI) => {
  try {
    const response = await userService.searchUserByRole(role)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchUserState = createAsyncThunk('users/search/state', async (state, thunkAPI) => {
  try {
    const response = await userService.searchUserByState(state)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteUser = createAsyncThunk('users/delete', async (id, thunkAPI) => {
  try {
    const response = await userService.deleteUser(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})
export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(userList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(userList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.categories = null
      })
      .addCase(searchUserEmail.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchUserEmail.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(searchUserEmail.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.categories = null
      })
      .addCase(searchUserRole.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchUserRole.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(searchUserRole.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.categories = null
      })
      .addCase(searchUserState.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchUserState.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.users = action.payload
      })
      .addCase(searchUserState.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.categories = null
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.categories = null
      })
  }
})

export const { reset } = userSlice.actions
export default userSlice.reducer
