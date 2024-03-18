import { ButtonLink } from '../Button/styles'
import strela from '../../assets/image/estrela.png'
import { Card, Titulo, Descricao, NomeAvalia, Infos } from './styles'
import { TagBar } from '../Tag/styles'

type Props = {
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Product = ({
  titulo,
  // destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <Card>
    <img src={capa} alt="" />
    <Infos>
      <TagBar>{tipo}</TagBar>
    </Infos>
    <NomeAvalia>
      <Titulo>{titulo}</Titulo>
      <span>
        {avaliacao}
        <img src={strela} />
      </span>
    </NomeAvalia>
    <Descricao>{descricao}</Descricao>
    <ButtonLink title="clique aqui para comprar">Comprar</ButtonLink>
  </Card>
)

export default Product
