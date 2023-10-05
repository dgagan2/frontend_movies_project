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

const getAllRoles = async () => {
  const response = await axios.get(`${VITE_API_URL}/role/`, getToken())
  return response.data
}

const getRoleByName = async (name) => {
  const response = await axios.get(`${VITE_API_URL}/role?name=${name}`, getToken())
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/role?id=${id}`, getToken())
  return response.data
}

const deleteRole = async (id) => {
  const response = await axios.delete(`${VITE_API_URL}/role/${id}`, getToken())
  return response.data
}

const addRole = async (name) => {
  const response = await axios.post(`${VITE_API_URL}/role/`, name, getToken())
  return response.data
}

const updateRole = async (data) => {
  const response = await axios.patch(`${VITE_API_URL}/role/`, data, getToken())
  return response.data
}

const roleService = {
  getAllRoles,
  getRoleByName,
  getById,
  deleteRole,
  addRole,
  updateRole
}

export default roleService
