import { BodyLogo, Imagem, Paragrafo, SocialMidia } from './styles'

import BannerImg from '../../assets/image/banner.png'
import Logo from '../../assets/image/logo.png'
import Insta from '../../assets/image/instagram.png'
import Face from '../../assets/image/facebook.png'
import Twit from '../../assets/image/twitter.png'

const Rodape = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <BodyLogo>
      <img src={Logo} alt="" />
    </BodyLogo>
    <SocialMidia>
      <ul>
        <a href="">
          <img src={Insta} />
        </a>
      </ul>
      <ul>
        <a href="">
          <img src={Face} />
        </a>
      </ul>
      <ul>
        <a href="">
          <img src={Twit} />
        </a>
      </ul>
    </SocialMidia>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Paragrafo>
  </Imagem>
)

export default Rodape
