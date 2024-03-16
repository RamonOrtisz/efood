import styled from 'styled-components'
import { colors } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 385px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;


    h2 {
      display: flex;
      justify-content: center;
      text-align: center;
      padding-top: 150px;
      font-size: 36px;
      font-weight: bold;
      line-height: 42px;
      color: ${colors.orange}
    }
  }
`
export const BodyLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`
