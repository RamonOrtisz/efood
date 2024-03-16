import Header from './components/Header'
import { GlobalCss } from './styles'
import ProductsList from './components/ProductsList'
import Rodape from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <div className="container">
        <ProductsList />
      </div>
      <Rodape />
    </>
  )
}

export default App
