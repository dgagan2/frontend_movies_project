import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService'

const initialState = {
  movies: null,
  moviesBillboard: null,
  moviesPremiere: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const newMovie = createAsyncThunk('movie/add', async (data, thunkAPI) => {
  try {
    const response = await movieService.addMovie(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const movieSlice = createSlice({
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
      .addCase(newMovie.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newMovie.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'Pelicula agregada'
      })
      .addCase(newMovie.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
})

try {

} catch (error) {

}
export const { reset } = movieSlice.actions
export default movieSlice.reducer
