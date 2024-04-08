import { useContext, useEffect } from 'react';

import { Login } from '../pages/Login';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext);

  const storageData = localStorage.getItem('authTokenHeliasta');

  if (!user && !storageData) {
    return <Login />
  }else{
    return children
  }

};




