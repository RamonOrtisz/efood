import Restaurante from '../../models/Restaurante'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  resto: Restaurante[]
}

const ProductsList = ({ resto }: Props) => (
  <Container>
    <List>
      {resto.map((resto) => (
        <Product
          key={resto.id}
          titulo={resto.titulo}
          tipo={resto.tipo}
          capa={resto.capa}
          descricao={resto.descricao}
          avaliacao={resto.avaliacao}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
