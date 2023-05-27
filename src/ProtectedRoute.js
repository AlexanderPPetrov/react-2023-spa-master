import React, { useEffect, useState } from 'react'
import AppNavbar from './components/AppNavbar'
import AppFooter from './components/AppFooter'

import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useUserContext } from './context/UserContext'
import { currentUserQuery } from './graphql/user'
import { client } from './network/client'
import { useQuery } from 'react-query'

const ProtectedRoute = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const currentPath = location.pathname
  const { data, isLoading, refetch } = useQuery(
    'currentUser',
    () => {
      return client.request(currentUserQuery)
    },
    { retry: false },
  )

  const [userDefined, setUserDefined] = useState(false)
  const { currentUser, setCurrentUser } = useUserContext()

  useEffect(() => {
    if (!data && isLoading) {
      return
    }
    if (data?.currentUser) {
      setCurrentUser(data?.currentUser)
    }
    setUserDefined(true)
  }, [data, isLoading, setCurrentUser])

  // useEffect(() => {
  //   if (!isLoginRoute() && !isAuthenticated()) {
  //     navigate('/login')
  //   }
  // }
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

  console.log(isLoading, currentUser, userDefined)
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
