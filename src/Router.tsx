import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
/* import { RequireAuth } from './helpers/RequireAuth';
import { AuthContext } from './helpers/AuthContext'; */



export function Router() {
    //const { user } = useContext(AuthContext)


    return (
        <Routes>

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/settings"
                element={<Settings />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>
    )
}