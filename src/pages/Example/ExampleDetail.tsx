import { useState } from 'react'
import { useParams } from 'react-router-dom'

const msSleep = (ms: number): Promise<TimerHandler> =>
  new Promise(resolve => setTimeout(resolve, ms))

const ExampleDetail = (): JSX.Element => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const { exampleId } = useParams()

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
