import { TagContainer } from './styles'

type Props = {
  tipo: string
}

const Tag = ({ tipo }: Props) => <TagContainer>{tipo}</TagContainer>

export default Tag
