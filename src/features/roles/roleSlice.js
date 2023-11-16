import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import roleService from './roleService'

const initialState = {
  roles: null,
  roleId: null,
  isError: false,
  isSuccess: false,
  isSuccessUpdateRole: false,
  isLoading: false,
  isOpen: false,
  message: ''
}

export const newRole = createAsyncThunk('roles/add', async (name, thunkAPI) => {
  try {
    const response = await roleService.addRole(name)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const roleList = createAsyncThunk('roles/list', async (thunkAPI) => {
  try {
    const response = await roleService.getAllRoles()
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchRoleByName = createAsyncThunk('roles/search/name', async (name, thunkAPI) => {
  try {
    const response = await roleService.getRoleByName(name)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const searchRoleById = createAsyncThunk('roles/search/id', async (id, thunkAPI) => {
  try {
    const response = await roleService.getById(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteRole = createAsyncThunk('roles/delete', async (id, thunkAPI) => {
  try {
    const response = await roleService.deleteRole(id)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateRole = createAsyncThunk('roles/update', async (data, thunkAPI) => {
  try {
    const response = await roleService.updateRole(data)
    return response
  } catch (error) {
    const message = error.response.data
    return thunkAPI.rejectWithValue(message)
  }
})

export const roleSlice = createSlice({
  name: 'rol',
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
      .addCase(newRole.pending, (state) => {
        state.isLoading = true
      })
      .addCase(newRole.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'Role creado'
      })
      .addCase(newRole.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(roleList.pending, (state) => {
        state.isLoading = true
        state.roles = null
      })
      .addCase(roleList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = null
        state.roles = action.payload
      })
      .addCase(roleList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.roles = null
      })
      .addCase(searchRoleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchRoleById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.roleId = action.payload
      })
      .addCase(searchRoleById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.roles = null
        state.roleId = null
      })
      .addCase(searchRoleByName.pending, (state) => {
        state.isLoading = true
      })
      .addCase(searchRoleByName.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.roles = action.payload
      })
      .addCase(searchRoleByName.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
        state.roles = null
      })
      .addCase(deleteRole.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.message = 'Usuario Eliminado'
      })
      .addCase(deleteRole.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
      .addCase(updateRole.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccessUpdateRole = true
        state.message = 'Usuario Actualizado'
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload || 'Servicio no disponible, intente más tarde'
      })
  }
})

export const { reset } = roleSlice.actions
export default roleSlice.reducer
