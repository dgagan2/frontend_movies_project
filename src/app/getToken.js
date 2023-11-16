const { VITE_API_KEY } = import.meta.env

const user = JSON.parse(sessionStorage.getItem('user'))
export const getToken = () => {
  const config = {
    headers: {
      api: VITE_API_KEY,
      Authorization: `Bearer ${user.token}`
    }
  }
  return config
}

export const configUploadImage = () => {
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      api: VITE_API_KEY,
      Authorization: `Bearer ${user.token}`
    }
  }
  return config
}
