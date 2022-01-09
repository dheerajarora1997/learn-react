import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} fade show mt-3`} role="alert">
            <strong>{props.alert.msg}</strong>
        </div>
    )
}

export default Alert
