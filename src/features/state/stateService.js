import axios from 'axios'
import { getToken } from '../../app/getToken'
const { VITE_API_URL } = import.meta.env

const getAllState = async () => {
  const response = await axios.get(`${VITE_API_URL}/state/`, getToken())
  return response.data
}

const getStateByName = async (name) => {
  const response = await axios.get(`${VITE_API_URL}/role?name=${name}`, getToken())
  return response.data
}

const deleteState = async (id) => {
  const response = await axios.delete(`${VITE_API_URL}/state/${id}`, getToken())
  return response.data
}

const addState = async (name) => {
  const response = await axios.post(`${VITE_API_URL}/state/`, name, getToken())
  return response.data
}

const updateState = async (data) => {
  const response = await axios.patch(`${VITE_API_URL}/state/`, data, getToken())
  return response.data
}

const stateService = {
  getAllState,
  addState,
  deleteState,
  getStateByName,
  updateState

}

export default stateService
