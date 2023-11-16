import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import favoriteMovieService from './favoriteMovieService'

const initialState = {
  listFavoriteMovies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getFavoriteMovies = createAsyncThunk('movies/favorite', async (thunkAPI) => {
  try {
    const response = await favoriteMovieService.getFavoriteMovie()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const newFavoriteMovie = createAsyncThunk('movies/addfavorite', async (data, thunkAPI) => {
  try {
    const response = await favoriteMovieService.addFavoriteMovie(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const favoriteMovieSlice = createSlice({
  name: 'favorite',
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
      .addCase(getFavoriteMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFavoriteMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.listFavoriteMovies = action.payload
      })
      .addCase(getFavoriteMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(newFavoriteMovie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newFavoriteMovie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(newFavoriteMovie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
}
)

export const { reset } = favoriteMovieSlice.actions
export default favoriteMovieSlice.reducer
