import { ApiResponse } from '../types'

import client from './client'

type Example = {
  id: string
  message: string
}

export const getExampleById = async (exampleId: string): Promise<Example> => {
  const { data } = await client.get<ApiResponse<Example>>(
    `/example/${exampleId}`
  )

  return data.data
}

export const getExampleByName = async (name: string): Promise<Example[]> => {
  const { data } = await client.get<ApiResponse<Example[]>>('/example/', {
    params: { name },
  })

  return data.data
}
