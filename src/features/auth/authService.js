import axios from 'axios'

const { API_URL, API_KEY } = import.meta.env
const config = {
  headers: {
    api: API_KEY
  }
}

const register = async (input) => {
  const response = await axios.post(`${API_URL}/account/register`, input, config)
  return response.data
}

const authService = {
  register
}

export default authService
