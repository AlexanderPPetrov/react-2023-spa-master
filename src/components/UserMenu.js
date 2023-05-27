import { useUserContext } from '../context/UserContext'
import { NavDropdown } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import { queryClient } from '../providers/Providers'
import { client } from '../network/client'
import { removeUserToken } from '../utils/token'
function UserMenu() {
  const { currentUser, setCurrentUser } = useUserContext()
  const handleMenuSelect = eventKey => {
    if (eventKey === 'logout') {
      removeUserToken()
      client.setHeader('Authorization', '')
      setCurrentUser({})
    }
  }
  return (
    <NavDropdown
      onSelect={handleMenuSelect}
      align="end"
      title={
        <div className="d-flex align-items-center">
          <BiUserCircle size="1.5rem" color="#222222" />
          <span className="mx-2">{currentUser?.firstName}</span>
        </div>
      }
    >
      <NavDropdown.Item eventKey="profile" href="#">
        <span>Profile</span>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="somethingElse" href="#">
        <span>Something else</span>
      </NavDropdown.Item>
      <NavDropdown.Item eventKey="logout" href="#">
        <span>Logout</span>
      </NavDropdown.Item>
    </NavDropdown>
  )
}
export default UserMenu
