import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Header from './components/Header'
import Rodape from './components/Footer'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <RouterProvider router={rotas} />
      </div>
      <Rodape />
    </>
  )
}

export default App
