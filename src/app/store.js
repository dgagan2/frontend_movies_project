import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import modalReduce from '../features/modals/modalSlice'
import rolesReducer from '../features/roles/roleSlice'
import movieReducer from '../features/movie/movieSlice'
import genreReducer from '../features/genres/genreSlice'
import favoriteReucer from '../features/movie/favoriteMovieSlice'
import likeReducer from '../features/movie/likeSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    modalReduce,
    rol: rolesReducer,
    movie: movieReducer,
    genre: genreReducer,
    favorite: favoriteReucer,
    likeMovie: likeReducer
  }
})
