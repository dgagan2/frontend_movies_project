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

const addGenre = async (data) => {
  const response = await axios.post(`${VITE_API_URL}/movies/genre`, data, getToken())
  return response.data
}

const getAllGenres = async () => {
  const skip = 0
  const limit = 15
  const response = await axios.get(`${VITE_API_URL}/movies/genre?limit=${limit}&skip=${skip}`, getToken())
  return response.data
}

const getGenreByName = async (name) => {
  const response = await axios.get(`${VITE_API_URL}/movies/genre/search?name=${name}`, getToken())
  return response.data
}

const getGenreById = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/movies/genre/id`, id, getToken())
  return response.data
}

const getGenreByHeader = async (data) => {
  const { limit, skip } = data
  const response = await axios.get(`${VITE_API_URL}/movies/genre/headerMenu?limit=${limit}&skip=${skip}`, getToken())
  return response.data
}

const deleteGenre = async (id) => {
  const response = await axios.delete(`${VITE_API_URL}/movies/genre/${id}`, getToken())
  return response.data
}

const updateGenre = async (data) => {
  const response = await axios.patch(`${VITE_API_URL}/movies/genre`, data, getToken())
  return response.data
}

const genreService = {
  addGenre,
  getAllGenres,
  getGenreByName,
  getGenreById,
  getGenreByHeader,
  deleteGenre,
  updateGenre
}

export default genreService
