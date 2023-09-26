import axios from 'axios'
const { VITE_API_URL, VITE_API_KEY } = import.meta.env
const user = JSON.parse(sessionStorage.getItem('user'))
const token = user ? user.token : ''
const config = {
  headers: {
    api: VITE_API_KEY,
    Authorization: `Bearer ${token}`
  }
}

const getMenuCategories = async () => {
  const response = await axios.get(`${VITE_API_URL}/movies/genre`, config)
  return response.data
}
const categoryService = {
  getMenuCategories
}

export default categoryService
