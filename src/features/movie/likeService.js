import axios from 'axios'
import { getToken } from '../../app/getToken'
const { VITE_API_URL } = import.meta.env

const getLikes = async (id) => {
  const response = await axios.get(`${VITE_API_URL}/movies/like/${id}`, getToken())
  return response.data
}

const addLike = async (id) => {
  const response = await axios.post(`${VITE_API_URL}/movies/like/${id}`, id, getToken())
  return response.data
}

export const likeService = {
  getLikes,
  addLike
}
