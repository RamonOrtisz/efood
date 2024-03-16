import { BodyLogo, Imagem } from './styles'

import BannerImg from '../../assets/image/banner.png'
import Logo from '../../assets/image/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <BodyLogo>
      <img src={Logo} alt="" />
    </BodyLogo>
    <h2>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </h2>
  </Imagem>
)

export default Header
