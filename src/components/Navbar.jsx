import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const { className } = props;

    return (
        <Link
            {...props}
            className={`${className} ${match ? "active" : ""}`}
            to={to}
        >
            {children}
        </Link>
    );
}
export default function Navbar(props) {

    const { mode, title, toggleMode } = props;

    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <CustomLink to="/" className="nav-link">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/about" className="nav-link">About {title}</CustomLink>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                    <div className="d-flex navbar-nav align-items-center">
                        {mode}
                        <div className="d-flex">
                            <button onClick={()=>{toggleMode('primary')}} className={`btn btn-primary p-3 ms-2 d-${mode === 'primary' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('danger')}} className={`btn btn-danger p-3 ms-2 d-${mode === 'danger' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('warning')}} className={`btn btn-warning p-3 ms-2 d-${mode === 'warning' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('success')}} className={`btn btn-success p-3 ms-2 d-${mode === 'success' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('info')}} className={`btn btn-info p-3 ms-2 d-${mode === 'info' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('light')}} className={`btn btn-light p-3 ms-2 d-${mode === 'light' ? 'none' : 'inline-block'}`} ></button>
                            <button onClick={()=>{toggleMode('dark')}} className={`btn btn-secondary p-3 ms-2 d-${mode === 'dark' ? 'none' : 'inline-block'}`} ></button>
                        </div>
                        <div className="nav-item d-none">
                            <div className="form-check form-switch nav-link">
                                <input className="form-check-input ms-0 me-2" type="checkbox" role="switch" id="flexSwitchCheck" defaultChecked={mode === 'dark' ? true : false} onClick={()=>{toggleMode(null)}} />
                                <label className="form-check-label" htmlFor="flexSwitchCheck" role="button" tabIndex="0">
                                    {`${mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}`}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}