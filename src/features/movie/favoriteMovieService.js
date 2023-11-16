import axios from 'axios'

const { VITE_API_URL, VITE_API_KEY } = import.meta.env

const getToken = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  const config = {
    headers: {
      api: VITE_API_KEY,
      Authorization: `Bearer ${user.token}`
    }
  }
  return config
}

const addFavoriteMovie = async (data) => {
  const { _id } = data
  const response = await axios.post(`${VITE_API_URL}/movies/favoriteMovies/${_id}`, data, getToken())
  return response.data
}

const getFavoriteMovie = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/favoriteMovies/`, getToken())
  return response.data
}

// const deleteUser = async (id) => {
//   const response = await axios.delete(`${VITE_API_URL}/user/${id}`, getToken())
//   return response.data
// }

// const updateMovie = async (data) => {
//   const response = await axios.patch(`${VITE_API_URL}/movies/`, data, getToken())
//   return response.data
// }

const favoriteMovieService = {
  getFavoriteMovie,
  addFavoriteMovie

}

export default favoriteMovieService
