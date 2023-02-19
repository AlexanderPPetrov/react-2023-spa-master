import AppNavbar from "../components/AppNavbar"
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
    return <>
        <AppNavbar/>
        <Outlet />
    </>
}

export default DefaultLayout