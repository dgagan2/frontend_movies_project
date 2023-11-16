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

const getMenuCategories = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/genre`, getToken())
  return response.data
}
const categoryService = {
  getMenuCategories
}

export default categoryService
