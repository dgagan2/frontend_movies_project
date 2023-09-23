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
    return await authService.register(user)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toSring()
    return thunkAPI.rejectWithValue(message) // Se retorna el error con el metodo reject
  }
})

// Se crea el slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ''
    },
    extraReducers: (builder) => {
      builder
        .addcase(register.pending, (state) => {
          // Si esta pendiente
          state.isLoading = true
        })
        .addcase(register.fulfilled, (state, action) => {
          // Si fue exitosa
          state.isLoading = false
          state.isSuccess = true
          state.user = action.payload
        })
        .addcase(register.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
          state.user = null
        })
    }
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
