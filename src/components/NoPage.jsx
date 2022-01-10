import React from 'react'

export default function NoPage(props) {
    const {mode} = props;
    return (
        <div className="container">
            <div className={`rounded mt-5 py-5 bg-${mode === 'dark' ? 'secondary' : 'light'}`}>
                <h3 className="display-1 text-center mb-0">
                    404
                </h3>
                <h4 className="h1 fw-light text-center mt-0">
                    Not Found
                </h4>
            </div>

        </div>
    )
}