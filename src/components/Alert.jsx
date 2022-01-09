import React from 'react'

function Alert(props) {

    const {alert, type, msg} = props;

    return (
        alert && <div className={`alert alert-${alert.type} fade show mt-3`} role="alert">
            <strong>{alert.msg}</strong>
        </div>
    )
}

export default Alert
