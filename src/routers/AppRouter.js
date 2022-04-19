import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                <Route path='/*' element={
                    /**
                     * como tengo ese dash dentro de prvate es un hijo, entonces cuando entoy 
                     * en el compomente Private se manda como un prop el hijo 
                     */
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }
                />
                {/* // quiero que todas las rutas sean manejadas por aca  */}
                {/* <Route path='/*' element= { <DashboardRoutes /> } /> */}
            </Routes>
        </BrowserRouter>
    )
};
