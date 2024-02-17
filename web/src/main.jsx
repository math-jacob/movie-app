import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import { NewMovie } from './pages/NewMovie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewMovie />
    </ThemeProvider>
  </React.StrictMode>,
)
