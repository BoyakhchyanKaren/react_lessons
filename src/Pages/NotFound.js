function NotFound() {
    return (
        <>
            <div className="alert alert-warning">
                <strong>Warning!</strong> 404 Page Not Found.
            </div>
            <div className="container mt-3">
                <p>Click on the button to open something help for you</p>

                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                    Open
                </button>
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"> Help! </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"> </button>
                        </div>

                        <div className="modal-body">
                            Go to here for seeing the actual links of the page...! <a href="/students">Click here</a>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
export default NotFound;