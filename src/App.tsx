import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { ClyclesProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ClyclesProvider>
          <Router />
        </ClyclesProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
