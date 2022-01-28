import { Link } from 'react-router-dom'

const ExamplePage = (): JSX.Element => {
  const list = [1, 2, 3, 4, 5]
  return (
    <div>
      Example
      <br />
      {list.map(val => (
        <Link key={val} to={`/example/${val}`}>
          {`${val} `}
        </Link>
      ))}
    </div>
  )
}

export default ExamplePage
