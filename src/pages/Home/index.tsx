import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Restaurante'

import ImgUm from '../../assets/image/image 1.png'

const PaginaUm: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi ',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    capa: ImgUm,
    tipo: 'Japonesa',
    avaliacao: '4.4'
  },
  {
    id: 2,
    titulo: 'Hioki Sushi ',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    capa: ImgUm,
    tipo: 'Japonesa',
    avaliacao: '4.4'
  },
  {
    id: 3,
    titulo: 'Hioki Sushi ',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    capa: ImgUm,
    tipo: 'Japonesa',
    avaliacao: '4.4'
  },
  {
    id: 4,
    titulo: 'Hioki Sushi ',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    capa: ImgUm,
    tipo: 'Japonesa',
    avaliacao: '4.4'
  }
]

const Home = () => (
  <>
    <ProductsList resto={PaginaUm} />
  </>
)

export default Home
