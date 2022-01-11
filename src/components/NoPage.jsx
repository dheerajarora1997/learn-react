import React from 'react'
import { Link } from "react-router-dom";

export default function NoPage(props) {
    const {mode} = props;
    return (
        <div className="container">
            <div className={`text-center rounded mt-5 py-5 bg-${mode === 'dark' ? 'secondary' : 'light'} text-${mode === 'dark' ? 'light' : 'secondary'}`}>
                <h3 className="display-1 text-center mb-0">
                    404
                </h3>
                <h4 className="h1 fw-light text-center mt-0">
                    Not Found
                </h4>
                <Link className={`btn btn-sm mt-4 px-2 btn-${mode === 'dark' ? 'light' : 'dark'}`} to="/">Back to Homepage</Link>
            </div>

        </div>
    )
}