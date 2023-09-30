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

const configUploadImage = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      api: VITE_API_KEY,
      Authorization: `Bearer ${user.token}`
    }
  }
  return config
}

const addMovie = async (data) => {
  const response = await axios.post(`${VITE_API_URL}/movies/`, data, configUploadImage())
  return response.data
}

const getAllMovies = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/`, getToken())
  return response.data
}

const searchMovieByName = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/search`, getToken())
  return response.data
}

const searchMovieByDate = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/date`, getToken())
  return response.data
}

const getLatestMovies = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/recent`, getToken())
  return response.data
}

const getPremiereMovies = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/premiere`, getToken())
  return response.data
}

const getBillboardMovies = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/billboard`, getToken())
  return response.data
}

const searchMoviesById = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/movies/billboard/${id}`, getToken())
  return response.data
}

// const deleteUser = async (id) => {
//   const response = await axios.delete(`${VITE_API_URL}/user/${id}`, getToken())
//   return response.data
// }

// const updateUser = async (data) => {
//   const response = await axios.patch(`${VITE_API_URL}/user/`, data, getToken())
//   return response.data
// }

const movieService = {
  addMovie,
  searchMovieByName,
  searchMovieByDate,
  searchMoviesById,
  getAllMovies,
  getLatestMovies,
  getPremiereMovies,
  getBillboardMovies
}

export default movieService
