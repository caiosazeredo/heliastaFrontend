import { useState, useEffect } from 'react';

import Api from "./Api"
import { AuthContext } from './AuthContext';
import { User } from "../dtos/User"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = Api();

  const setToken = (token: string) => {
    localStorage.setItem('authTokenHeliasta', token)
  }

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authTokenHeliasta')
      if (storageData) {
        const data = await api.validateToken(storageData)
        /* if (!data.error) {
          setUser(data)
          setToken(data.token)
        } else {
          setUser(null)
        } */
        if ('error' in data) {
          return {
            connect: false,
            error: data.error
          }
        } else {
          setUser(data);
          setToken(data.token);
          localStorage.setItem('authTokenHeliasta', data.token)

          return {
            connect: true,
            error: ''
          }
        }
      } else {
        setUser(null)
        signout()
      }
    }
    validateToken();
  }, [api])

  const signin = async (email: string, password: string) => {
    try {
      const data = await api.login(email, password)
      /* if (!data.error) {
        setUser(data);
        setToken(data.token);
        localStorage.setItem('authTokenHeliasta', data.token)

        return {
          connect: true,
          error: ''
        }
      }
      return {
        connect: false,
        error: data.error
      } */
      if ('error' in data) {
        return {
          connect: false,
          error: data.error
        }
      } else {
        setUser(data);
        setToken(data.token);
        localStorage.setItem('authTokenHeliasta', data.token)

        return {
          connect: true,
          error: ''
        }
      }
    } catch (error) {
      return {
        connect: false,
        error: 'Erro ao se comunicar com o banco de dados.'
      }
    }
  }

  const signout = () => {
    setUser(null)
    setToken("")
  }


  /*  const IsLogged = () => {
     if (!token) {
       return <Login />
     }
     navigate('/') 
     return <Home />
   }
 
   const IsAuthenticated = ({children}) => {
     if (!token) {
       return <Login />
     }
     return children;
   } */

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider >
  )
}