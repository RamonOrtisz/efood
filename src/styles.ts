import { createGlobalStyle } from 'styled-components'

export const colors = {
  matte: '#FFF8F2',
  white: '#fff',
  orange: '#E66767',
  lightOrange: '#FFEBD9',
  textColor: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${colors.matte}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
