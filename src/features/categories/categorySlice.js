import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import categoryService from './categoryService'

const initialState = {
  categories: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const categoriesNavbar = createAsyncThunk('category/menu', async (thunkAPI) => {
  try {
    const response = await categoryService.getMenuCategories()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message) // Se retorna el error con el metodo reject
  }
})

export const categorySlice = createSlice({
  name: 'category',
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
      .addCase(categoriesNavbar.pending, (state) => {
        state.isLoading = true
      })
      .addCase(categoriesNavbar.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(categoriesNavbar.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.user = null
      })
  }
})

export const { reset } = categorySlice.actions
export default categorySlice.reducer
