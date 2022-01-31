import axios, { AxiosError, AxiosInstance } from 'axios'

import { envConfig } from '../constants'

const createClient = (): AxiosInstance => {
  const newClient = axios.create({
    baseURL: envConfig.apiBaseUrl,
  })

  newClient.interceptors.response.use(
    res => res,
    (error: AxiosError) => {
      const { response } = error
      return Promise.reject(response)
    }
  )

  return newClient
}

const client = createClient()

export default client
