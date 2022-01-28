import { Suspense } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Example from './pages/Example'
import ExampleDetail from './pages/Example/ExampleDetail'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

const AppLayout = (): JSX.Element => (
  <div>
    <h1>This is the AppLayout</h1>
    <Link to="/">Home </Link>
    <Link to="/example">Example </Link>
    <Link to="/404">404</Link>
    <Outlet />
  </div>
)
const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="example">
        <Route index element={<Example />} />
        <Route
          path=":exampleId"
          element={
            <Suspense fallback={<>...</>}>
              <ExampleDetail />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
)

export default App
