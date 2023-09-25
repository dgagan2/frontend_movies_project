import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Obtener el usuario del sesion storage
const user = JSON.parse(sessionStorage.getItem('user'))

// Se inicializa el slice
const initialState = {
  user: user || null, // La data que devuelve el backend
  isError: false, // Cuando is reject
  isSuccess: false, // Cuando es fulfilled
  isLoading: false, // Cuando es pending
  message: '' // El mensaje cuando hay un error
}

// Registar Usuario
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const response = await authService.register(user)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message) // Se retorna el error con el metodo reject
  }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await authService.login(user)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const changePassword = createAsyncThunk('auth/changePassword', async (user, thunkAPI) => {
  try {
    const response = await authService.forgotPassword(user)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})
// Se crea el slice
export const authSlice = createSlice({
  name: 'auth',
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
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
