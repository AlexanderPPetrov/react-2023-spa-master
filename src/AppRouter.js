import * as React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import UsersPage from "./pages/UsersPage"
import WeatherPage from "./pages/WeatherPage"

import { BrowserRouter } from "react-router-dom";

function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="weather" element={<WeatherPage />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
            </Route>
        </Routes>
      </BrowserRouter>
  )
}
export default AppRouter
