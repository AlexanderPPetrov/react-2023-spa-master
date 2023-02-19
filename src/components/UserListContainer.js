import { useEffect, useState } from 'react'
import UserList from "./UserList"
import axios from 'axios';

function UserListContainer({children}) {

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          if(res?.data) {
            setUserList(res.data)
          }
        })
    }, []);


    return <div className="card">
      {children}
    <UserList userList={userList}></UserList>
  </div>
 
}

export default UserListContainer