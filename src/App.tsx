import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './themes/global'
import { Router } from './Router'


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}