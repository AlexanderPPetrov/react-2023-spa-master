import React from 'react';
import AppNavbar from "./components/AppNavbar"
import AppFooter from "./components/AppFooter"

import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const ProtectedRoute = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { currentUser } = useUserContext();

    const isAuthenticated = () => {
        return Object.keys(currentUser).length
    }
    const isLoginRoute = () => {
        return currentPath === '/login'
    }
    return <>
     {/* {!isLoginRoute() && <AppNavbar/>} */}
     {/* <Outlet /> */}
        {!isLoginRoute() && <AppNavbar/>}
        <main className="flex-shrink-0">
            {isAuthenticated() || isLoginRoute() ? <Outlet /> : <Navigate to="/login" />}
        </main>
        {!isLoginRoute() && <AppFooter/>}
    </>
}

export default ProtectedRoute
