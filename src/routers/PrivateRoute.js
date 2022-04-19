import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext)

    const { pathname, search } = useLocation();   
    

    localStorage.setItem('lastPath', pathname + search);

    return user.logged
        ? children
        /**con navigate lo que hago es que si no esta logueado por mas que ponga lña ruta no me permite entar, 
         * si no que me mantienen en login */
        : <Navigate to='/login' />
}
