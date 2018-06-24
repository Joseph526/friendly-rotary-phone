import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger justify-content-between">
        <a className="navbar-brand" href="index.html">ClickMatchWin</a>
        <div className="navbar-text">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">Score: |&nbsp;</li>
                <li className="nav-item">Top Score: </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
