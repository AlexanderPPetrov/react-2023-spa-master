import UserMenu from "../components/UserMenu"
import UserListContainer from "../components/UserListContainer"
function UsersPage() {
    return <div className="container">
    <div className="row">
        <div className="col-md-4">
            <UserMenu/>
        </div>
        <div className="col-md-8">
            <UserListContainer/>
        </div>
    </div>
</div>
 
}

export default UsersPage