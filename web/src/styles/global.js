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

  /* Scrollbar */
  
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({theme}) => theme.COLORS.PINK_100} ${({theme}) => theme.COLORS.BLACK_100};
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    margin-left: 15px;
  }

  *::-webkit-scrollbar-track {
    background: ${({theme}) => theme.COLORS.BLACK_100};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.COLORS.PINK_100};
    border-radius: 20px;
    border: 3px solid ${({theme}) => theme.COLORS.PINK_100};
  }
`