import { useUserContext } from '../context/UserContext'
function UserMenu() {
  const { currentUser } = useUserContext()
  return <div className="alert alert-success" role="alert">
    {currentUser?.name}
  </div>
}
export default UserMenu