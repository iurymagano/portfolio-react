import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --roxo-600: #260d59;
  }

  body {
    background: #111111;
    color: #fff;

    scroll-behavior: smooth;

    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`