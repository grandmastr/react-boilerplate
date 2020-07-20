import React from 'react'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './base/global-styles'
import theme from './base/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </>
    </ThemeProvider>
  )
}

export default hot(module)(App)
