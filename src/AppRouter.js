import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviesPage from './pages/MoviesPage'
import UsersPage from './pages/UsersPage'
import WeatherPage from './pages/WeatherPage'
import BookingPage from './pages/BookingPage'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter } from 'react-router-dom'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="admin" element={<div />} />
          <Route path="weather" element={<WeatherPage />} />
          <Route path="booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
