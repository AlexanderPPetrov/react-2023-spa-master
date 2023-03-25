
function Workstation({isLeft, workstation}) {

    return <div className={`place ${isLeft ? 'left' : 'right'}`}>
    <div className="workstation d-flex align-items-center">
        <div className="chair"></div>
        <div className="desk d-flex align-items-center justify-content-center">
            <div className={`user-placeholder ${workstation?.user ? 'occupied' : ''}`}>
                {workstation?.user && <div className="user-abbreviation">
                    {workstation?.user}
                </div>}
            </div>
        </div>
    </div>
</div>
 
}

export default Workstation