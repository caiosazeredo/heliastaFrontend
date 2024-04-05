import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './themes/global'
import { Router } from './Router'

import { TabMenu } from './components/TabMenu'
import { Container, Container2 } from './styles'
import { SyntheticEvent, useState } from 'react'

import { TabMenuProvider } from './contexts/TabMenuContext';
import { DrawerMenu } from './components/DrawerMenu'


export function App() {
  const user = null

  return (
    <ThemeProvider theme={defaultTheme}>

      <TabMenuProvider>
        <BrowserRouter>

        {!user &&
          <Container>
            <TabMenu />
            <DrawerMenu />
            <Router />
          </Container>
        }

        {user &&
          <Container2>
            <Router />
          </Container2>
        }

        </BrowserRouter>
      </TabMenuProvider>


      <GlobalStyle />
    </ThemeProvider>
  )
}