import axios from 'axios'

import { API_DOMAIN } from '../constants/common'

const axiosInstance = axios.create({
  baseURL: API_DOMAIN,
  validateStatus: function (status) {
    return status < 500
  }
})

axiosInstance.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    if (response.status === 401) {
      // logout action
    }
    if (response.status === 400) {
      throw new Error(response.data.message)
    }
  }

  return response
}, function (error) {
  return Promise.reject(error)
})

export default axiosInstance
