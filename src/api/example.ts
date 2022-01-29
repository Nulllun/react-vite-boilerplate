import client from './client'

type Example = {
  id: string
  message: string
}

export const getExampleById = async (exampleId: string): Promise<Example> => {
  const { data } = await client.get<Example>(`/example/${exampleId}`)
  return data
}
