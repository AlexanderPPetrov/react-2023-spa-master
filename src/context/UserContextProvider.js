import { useState } from 'react'
import { UserContext } from './UserContext'
function UserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  const context = {
    currentUser,
    setCurrentUser,
  }
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>
}

export default UserContextProvider
