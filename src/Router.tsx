import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { Login } from './pages/Login';
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
                /* element={<RequireAuth><Home /></RequireAuth>} */
                element={<Home />}
            />


            {/* <Route path="*"
                element={<NotFound />}
            /> */}

        </Routes>
    )
}