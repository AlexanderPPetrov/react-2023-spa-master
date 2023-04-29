
function Workstation({isLeft, user, onBook}) {

    return <div className={`place ${isLeft ? 'left' : 'right'}`}>
    <div className="workstation d-flex align-items-center">
        <div className="chair"></div>
        <div onClick={()=> onBook()} className="desk d-flex align-items-center justify-content-center">
            <div className={`d-flex align-items-center justify-content-center user-placeholder ${user ? 'occupied' : ''}`}>
                {user && <div className="user-abbreviation ">
                    {user}
                </div>}
            </div>
        </div>
    </div>
</div>
 
}

export default Workstation