import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${colors.textColor};
  background-color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
`

export const ButtonLink = styled.button`
  color: ${colors.textColor};
  background-color: ${colors.orange};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  margin-bottom: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`
