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

export const getMoviesPremiere = createAsyncThunk('movie/premiere', async (thunkAPI) => {
  try {
    const response = await movieService.getPremiereMovies()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const getMoviesBillboard = createAsyncThunk('movie/billboard', async (thunkAPI) => {
  try {
    const response = await movieService.getBillboardMovies()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const getMovies = createAsyncThunk('movie/home', async (thunkAPI) => {
  try {
    const response = await movieService.getAllMovies()
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
      .addCase(getMoviesPremiere.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMoviesPremiere.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.moviesPremiere = action.payload
      })
      .addCase(getMoviesPremiere.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(getMoviesBillboard.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMoviesBillboard.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.moviesBillboard = action.payload
      })
      .addCase(getMoviesBillboard.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.movies = action.payload
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
}
)

export const { reset } = movieSlice.actions
export default movieSlice.reducer
