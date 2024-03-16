import { ButtonLink } from './styles'

type Props = {
  title: string
  to?: string
  children: string
}

const Button = ({ title, children }: Props) => (
  <ButtonLink title={title}>{children}</ButtonLink>
)

export default Button
