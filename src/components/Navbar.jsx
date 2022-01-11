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
const modeOpacity = {
    primary: '25',
    warning: '25',
    success: '25',
    danger: '25',
    info: '25',
    light: '100',
    dark: '100',
    secondary: '75',
}

export default function Navbar(props) {

    const { mode, title, toggleMode } = props;

    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode === 'dark' || mode === 'secondary' ? 'dark' : 'light'} bg-opacity-${modeOpacity[mode]} bg-${mode}`}>
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
                            <CustomLink to="/about" className="nav-link">About</CustomLink>
                        </li>
                    </ul>
                    <div className="d-flex navbar-nav align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Change Colour Theme
                            </a>
                            <ul className="dropdown-menu border-0 shadow" aria-labelledby="navbarDropdown">
                                <div className="d-flex justify-content-around">
                                    <button onClick={() => { toggleMode('primary') }} className={`border btn btn-primary p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('danger') }} className={`border btn btn-danger p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('warning') }} className={`border btn btn-warning p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('success') }} className={`border btn btn-success p-3 m-1`} ></button>

                                </div>
                                <div className="d-flex justify-content-around">
                                    <button onClick={() => { toggleMode('info') }} className={`border btn btn-info p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('light') }} className={`border btn btn-light p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('dark') }} className={`border btn btn-dark p-3 m-1`} ></button>
                                    <button onClick={() => { toggleMode('secondary') }} className={`border btn btn-secondary p-3 m-1`} ></button>

                                </div>
                            </ul>
                        </li>
                        <div className="nav-item d-none">
                            <div className="form-check form-switch nav-link">
                                <input className="form-check-input ms-0 me-2" type="checkbox" role="switch" id="flexSwitchCheck" defaultChecked={mode === 'dark' ? true : false} onClick={() => { toggleMode(null) }} />
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