import React from 'react'

function Alert() {
    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Thank You!</strong> Your Complaint has been recorded.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert;