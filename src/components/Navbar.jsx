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
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <CustomLink to="/" className="nav-link">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/about" className="nav-link">About {props.title}</CustomLink>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li> */}
                    </ul>
                    <div className="d-flex navbar-nav">
                        <div className="nav-item">
                            <div className="form-check form-switch nav-link">
                                <input className="form-check-input ms-0 me-2" type="checkbox" role="switch" id="flexSwitchCheck" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheck" >
                                    {`${props.mode === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}`}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}