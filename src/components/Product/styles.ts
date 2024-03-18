import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  max-width: 474px;
  border: 1px solid ${colors.orange};
  position: relative;

  span {
    max-width: 55px;
    max-height: 21px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;

    img {
      margin-left: 8px;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Descricao = styled.p`
  margin-left: 8px;
  font-size: 14px;
  line-weight: 22px;
  margin-bottom: 16px;
`
export const NomeAvalia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
