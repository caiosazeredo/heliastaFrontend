import { defaultTheme } from './themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './themes/global'
import { Router } from './Router'

import { TabMenu } from './components/TabMenu'
import { Container, Container2 } from './styles'
import { SyntheticEvent, useContext, useEffect, useState } from 'react'

import { TabMenuProvider } from './helpers/TabMenuContext';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import { DrawerMenu } from './components/DrawerMenu'
import { AuthContext } from './helpers/AuthContext'



export function App() {
  const { user } = useContext(AuthContext)


  /* useEffect(()=>{
    console.log('User: ', user)
  },[user]) */

  return (
    <ThemeProvider theme={defaultTheme}>

      <TabMenuProvider>
        <BrowserRouter>

          {user &&
            <Container>
              <TabMenu />
              <DrawerMenu />
              <Router />
            </Container>
          }

          {!user &&
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