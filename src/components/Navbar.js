import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    let match = '';
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container">
                <Link className="navbar-brand" aria-current="page" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${match ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${match ? "active" : ""}`} to="/about">About {props.title}</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex navbar-nav">
                        <div className="nav-item">
                            <div className="form-check form-switch nav-link">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheck" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheck" >
                                    {`${props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}`}
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}