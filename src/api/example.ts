import { ApiResponse, Example } from '../types'

import client from './client'

const getExampleById = async (exampleId: string): Promise<Example> => {
  const { data } = await client.get<ApiResponse<Example>>(
    `/example/${exampleId}`
  )

  return data.data
}

const getExampleByName = async (name: string): Promise<Example[]> => {
  const { data } = await client.get<ApiResponse<Example[]>>('/example/', {
    params: { name },
  })

  return data.data
}

export const exampleApi = {
  getExampleById,
  getExampleByName,
}
