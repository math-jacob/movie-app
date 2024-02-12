import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BLACK_100};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea {
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`