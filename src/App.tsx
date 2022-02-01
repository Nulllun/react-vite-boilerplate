import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

import Example from './pages/Example'
import ExampleDetail from './pages/Example/ExampleDetail'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

const AppLayout = (): JSX.Element => {
  const { t, i18n } = useTranslation(['glossary', 'misc'])

  const toggleLanguage = (): void => {
    if (i18n.language === 'zh') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('zh')
    }
  }

  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        {t('misc:toggle_language')}
      </button>
      <h1>{`This is the AppLayout for ${t('glossary:app_name')}`}</h1>
      <Link to="/">Home </Link>
      <Link to="/example">Example </Link>
      <Link to="/404">404</Link>
      <Outlet />
    </div>
  )
}
const App = (): JSX.Element => (
  <Suspense fallback={<>...</>}>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="example">
          <Route index element={<Example />} />
          <Route path=":exampleId" element={<ExampleDetail />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </Suspense>
)

export default App
