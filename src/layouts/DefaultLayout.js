import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

import { Outlet, useLocation } from 'react-router-dom'
function DefaultLayout() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <>
      {currentPath !== '/login' && <AppNavbar />}
      <Outlet />
      {currentPath !== '/login' && <AppFooter />}
    </>
  )
}

export default DefaultLayout
