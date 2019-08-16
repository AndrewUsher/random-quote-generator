import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: #355c7d;
    text-align: center;
  }
`

export default GlobalStyles
