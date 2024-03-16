import { ButtonLink } from '../Button/styles'
import strela from '../../assets/image/estrela.png'
import { Card, Titulo, Descricao } from './styles'

type Props = {
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Product = () => (
  <Card>
    <img src="//placehold.it/472x217" alt="" />
    <div>
      <Titulo>Nome da comida</Titulo>
      <span>
        4.9
        <img src={strela} />
      </span>
    </div>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus adipisci
      magnam blanditiis. Quibusdam, voluptate veniam. Quisquam provident
      repudiandae laborum, et cupiditate quaerat rem voluptates quibusdam
      distinctio iure temporibus recusandae placeat.
    </Descricao>
    <ButtonLink title="clique aqui para comprar">Comprar</ButtonLink>
  </Card>
)

export default Product
