import UserItem from './UserItem'

function UserList({ userList }) {
  function getUserItems() {
    return userList.map(user => {
      return <UserItem key={user.id} user={user} />
    })
  }

  return <ul className="list-group user-list">{getUserItems()}</ul>
}
export default UserList
