import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './themes/global'
import { Router } from './Router'

import { TabMenu } from './components/TabMenu'
import { Container } from './styles'
import { SyntheticEvent, useState } from 'react'

import { TabMenuProvider } from './contexts/TabMenuContext';


export function App() {
  const user = null

  return (
    <ThemeProvider theme={defaultTheme}>

      <TabMenuProvider>
        <BrowserRouter>

          <Container>
            {!user &&
              <TabMenu />
            }
            <Router />
          </Container>

        </BrowserRouter>
      </TabMenuProvider>


      <GlobalStyle />
    </ThemeProvider>
  )
}