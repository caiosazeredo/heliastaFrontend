import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './themes/global'
import { Router } from './Router'

import { DrawerMenu } from './components/DrawerMenu'
import { Container } from './styles'


export function App() {

  const user = null

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <Container>

          {!user &&
            <DrawerMenu />
          }
          <Router />
        </Container>

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}