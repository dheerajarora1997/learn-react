import React from 'react'

function Alert(props) {

    const { alert } = props;

    return (
        alert && <div className="toast-container position-fixed w-100 d-flex justify-content-center align-items-center" style={{top: '0px'}}>
            <div className={`alert alert-${alert.type} fade show mt-5 border-0`} role="alert">
                <strong>{alert.msg}</strong>
            </div>
        </div>
    )
}

export default Alert
