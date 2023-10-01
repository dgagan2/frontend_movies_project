import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import genreService from './genreService'

const initialState = {
  genres: null,
  genreId: null,
  genreHeader: null,
  dataGenre: null,
  isError: false,
  isSuccess: false,
  isSuccessUpdateGenre: false,
  isLoading: false,
  isOpen: false,
  message: ''
}

export const modalOpen = createAsyncThunk('genre/modal/update', (data) => {
  return data
})

export const modalClose = createAsyncThunk('genre/modal/close', () => {
  return true
})

export const getGenres = createAsyncThunk('genre/all', async (thunkAPI) => {
  try {
    const response = await genreService.getAllGenres()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const newGenre = createAsyncThunk('genre/add', async (data, thunkAPI) => {
  try {
    const response = await genreService.addGenre(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchGenreByName = createAsyncThunk('genre/search/name', async (name, thunkAPI) => {
  try {
    const response = await genreService.getGenreByName(name)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchGenreById = createAsyncThunk('genre/search/id', async (id, thunkAPI) => {
  try {
    const response = await genreService.getGenreById(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const getGenreHeader = createAsyncThunk('genre/header', async (limit, thunkAPI) => {
  try {
    const response = await genreService.getGenreByHeader(limit)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteGenre = createAsyncThunk('genre/delete', async (id, thunkAPI) => {
  try {
    const response = await genreService.deleteGenre(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateGenre = createAsyncThunk('genre/update', async (data, thunkAPI) => {
  try {
    const response = await genreService.updateGenre(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.dataGenre = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.genres = action.payload
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(newGenre.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newGenre.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'Genero Creado'
      })
      .addCase(newGenre.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(searchGenreByName.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchGenreByName.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.genres = action.payload
      })
      .addCase(searchGenreByName.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(searchGenreById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchGenreById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.genreId = action.payload
      })
      .addCase(searchGenreById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(getGenreHeader.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getGenreHeader.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.genreHeader = action.payload
      })
      .addCase(getGenreHeader.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(deleteGenre.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteGenre.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'Genero eliminado'
      })
      .addCase(deleteGenre.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(updateGenre.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateGenre.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isSuccessUpdateGenre = true
        state.message = 'Genero actualizado'
      })
      .addCase(updateGenre.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(modalOpen.fulfilled, (state, action) => {
        state.isOpen = true
        state.dataGenre = action.payload
      })
      .addCase(modalClose.fulfilled, (state) => {
        state.isOpen = false
        state.dataGenre = ''
      })
  }
})

export const { reset } = genreSlice.actions
export default genreSlice.reducer
