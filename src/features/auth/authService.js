import axios from 'axios'

const { VITE_API_URL, VITE_API_KEY } = import.meta.env
const config = {
  headers: {
    api: VITE_API_KEY
  }
}

const register = async (input) => {
  const response = await axios.post(`${VITE_API_URL}/account/register`, input, config)
  return response.data
}

const login = async (input) => {
  const response = await axios.post(`${VITE_API_URL}/account/login`, input, config)
  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const forgotPassword = async (input) => {
  const response = await axios.post(`${VITE_API_URL}/account/reset/password`, input, config)
  return response.data
}

const logout = () => {
  sessionStorage.removeItem('user')
}

const authService = {
  register,
  login,
  forgotPassword,
  logout
}

export default authService
