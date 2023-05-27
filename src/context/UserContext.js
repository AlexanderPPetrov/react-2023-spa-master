import React, { useContext } from 'react'
const defaultUserContext = {
  currentUser: {},
  setCurrentUser: () => undefined,
}

export const UserContext = React.createContext(defaultUserContext)
export const useUserContext = () => useContext(UserContext)
