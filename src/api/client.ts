import axios from 'axios'

import { envConfig } from '../constants'

const client = axios.create({
  baseURL: envConfig.apiBaseUrl,
})

export default client
