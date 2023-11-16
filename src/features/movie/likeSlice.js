import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { likeService } from './likeService'

const initialState = {
  isLike: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

export const getLike = createAsyncThunk('movies/like', async (id, thunkAPI) => {
  try {
    const response = await likeService.getLikes(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const newLike = createAsyncThunk('movies/addlike', async (id, thunkAPI) => {
  try {
    const response = await likeService.addLike(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const likeMovieSlice = createSlice({
  name: 'likeMovie',
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
      .addCase(getLike.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLike.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLike = action.payload
      })
      .addCase(getLike.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isLike = false
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(newLike.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newLike.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isLike = action.payload.like
      })
      .addCase(newLike.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isLike = false
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
}
)

export const { reset } = likeMovieSlice.actions
export default likeMovieSlice.reducer
