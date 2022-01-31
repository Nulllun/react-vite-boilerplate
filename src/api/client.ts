import axios, { AxiosError, AxiosInstance } from 'axios'

import { EnvConfig } from '../constants'

const createClient = (): AxiosInstance => {
  const newClient = axios.create({
    baseURL: EnvConfig.apiBaseUrl,
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
