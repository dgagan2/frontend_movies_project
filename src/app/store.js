import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/categories/categorySlice'
import userReducer from '../features/user/userSlice'
import modalReduce from '../features/modals/modalSlice'
import rolesReducer from '../features/roles/roleSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    users: userReducer,
    modalReduce,
    rol: rolesReducer
  }
})
