import Workstation from "../components/Workstation"

function BookingPage() {

    const columns = [[
        {
            id: 1,
            user: "",
        },
        {
            id: 2,
            user: "",
        },
        {
            id: 3,
            user: "AB",
        },
        {
            id: 4,
            user: "",
        },
        {
            id: 5,
            user: "",
        },
    ], [
        {
            id: 6,
            user: "",
        },
        {
            id: 7,
            user: "CD",
        },
        {
            id: 8,
            user: "",
        },
    ]];

    function getWorkStations(column) {
        return column.map((workstation, index) => {
            return <Workstation 
                key={workstation.id}
                isLeft={index % 2 === 0}
                workstation={workstation}
            ></Workstation>
        })
    }

    function getColumns() {
        return columns.map((column, index) => {
            return <div key={index} className="booking-column mx-2">
                    <div className="d-flex flex-wrap">
                        {getWorkStations(column)}
                    </div>
                </div>
        })
    }

    


    return <div className="container">
    <div className="row">
        <div className="col-md-4">
            Booking page
        </div>
        <div className="col-md-8">
            <div className="d-flex">
                {getColumns()}
                {/* <div className="booking-column mx-2">
                    <div className="d-flex flex-wrap">


                        <div className="left place my-2">
                            <div className="workstation d-flex align-items-center">
                                <div className="chair"></div>
                                <div className="desk d-flex align-items-center justify-content-center">
                                    <div className="user-placeholder"></div>
                                </div>
                            </div>
                        </div>

                        <div className="right place my-2">
                            <div className="workstation d-flex align-items-center">
                                <div className="chair"></div>
                                <div className="desk d-flex align-items-center justify-content-center">
                                    <div className="user-placeholder occupied">
                                        <div className="user-abbreviation">AB</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="left place my-2 px-2"></div>
                        <div className="right place my-2 px-2"></div>
                        <div className="left place my-2 px-2"></div>
                    </div>
                </div>
                <div className="booking-column mx-2">
                    <div className="d-flex flex-wrap">
                        <div className="left place my-2 px-2"></div>
                        <div className="right place my-2 px-2"></div>
                        <div className="left place my-2 px-2"></div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
</div>
 
}

export default BookingPage