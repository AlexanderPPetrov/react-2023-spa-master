import React, { useState } from 'react'
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUserContext } from './context/UserContext'
import { currentUserQuery } from './graphql/user'
import { client } from './network/client'
import { useQuery } from 'react-query'

const ProtectedRoute = () => {
  const location = useLocation()
  const [userDefined, setUserDefined] = useState(false)
  const { currentUser, setCurrentUser } = useUserContext()
  const currentPath = location.pathname

  const { isLoading } = useQuery(
    'currentUser',
    () => {
      return client.request(currentUserQuery)
    },
    {
      retry: false,
      onSettled: data => {
        setCurrentUser(data?.currentUser || {})
        setUserDefined(true)
      },
    },
  )

  const isAuthenticated = () => {
    return Object.keys(currentUser).length
  }
  const isLoginRoute = () => {
    return currentPath === '/login'
  }

  const isAdminRoute = () => {
    return currentPath === '/admin'
  }

  const getRoute = () => {
    if (isAdminRoute() && !currentUser?.roles?.includes('ADMIN')) {
      return <Navigate to="/" />
    }

    if (isLoginRoute() && isAuthenticated()) {
      return <Navigate to="/" />
    }
    return isAuthenticated() || isLoginRoute() ? <Outlet /> : <Navigate to="/login" />
  }

  if (isLoading || !userDefined) {
    return null
  }

  return (
    <>
      {/* {!isLoginRoute() && <AppNavbar/>} */}
      {/* <Outlet /> */}
      {!isLoginRoute() && <AppNavbar />}
      <main className="flex-shrink-0">{getRoute()}</main>
      {!isLoginRoute() && <AppFooter />}
    </>
  )
}

export default ProtectedRoute
