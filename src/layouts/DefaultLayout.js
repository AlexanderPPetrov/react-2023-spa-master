import AppNavbar from "../components/AppNavbar"
import { Outlet, useLocation } from 'react-router-dom'
function DefaultLayout() {
    const location = useLocation();
    const currentPath = location.pathname;
    
    return <>
        {currentPath !== '/login' && <AppNavbar/>}
        <Outlet />
    </>
}

export default DefaultLayout