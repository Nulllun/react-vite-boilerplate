import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { exampleApi } from '../../api/example'
import { QueryKey } from '../../constants'
import { ApiError, Example } from '../../types'

const msSleep = (ms: number): Promise<TimerHandler> =>
  new Promise(resolve => setTimeout(resolve, ms))

const ExampleDetail = (): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { exampleId = '' } = useParams<{ exampleId: string }>()

  const { data, error } = useQuery<Example, ApiError>(
    [QueryKey.ExampleDetail, exampleId],
    () => exampleApi.getExampleById(exampleId),
    { enabled: Boolean(exampleId) }
  )

  useEffect(() => {
    console.log({ data, error })
  }, [data, error])

  const handleAlert = async (): Promise<void> => {
    setIsShow(true)
    await msSleep(2000)
    setIsShow(false)
  }
  return (
    <div>
      <span>{`This the example no.${exampleId}`}</span>
      <button type="button" onClick={handleAlert}>
        Alert
      </button>
      {isShow && <span>Hello World</span>}
    </div>
  )
}

export default ExampleDetail
