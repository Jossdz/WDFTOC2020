import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.bgcolor};
  }
`

export default GlobalStyles