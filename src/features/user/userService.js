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

const getAllUsers = async (skip, limit) => {
  const response = await axios.get(`${VITE_API_URL}/user/all?skip=${skip}&limit=${limit}`, getToken())
  return response.data
}

const searchUserByEmail = async (email) => {
  const response = await axios.get(`${VITE_API_URL}/user/search?email=${email}`, getToken())
  return response.data
}

const searchUserByRole = async (role) => {
  const response = await axios.get(`${VITE_API_URL}/user/search?role=${role}`, getToken())
  return response.data
}

const searchUserByState = async (state) => {
  const response = await axios.get(`${VITE_API_URL}/user/search?state=${state}`, getToken())
  return response.data
}

const deleteUser = async (id) => {
  const response = await axios.delete(`${VITE_API_URL}/user/${id}`, getToken())
  return response.data
}
const userService = {
  getAllUsers,
  searchUserByEmail,
  searchUserByRole,
  searchUserByState,
  deleteUser
}

export default userService
