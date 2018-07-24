import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-danger justify-content-between">
        <a className="navbar-brand" href="index.html">ClickMatchWin</a>
        <div className="navbar-message">{props.message}</div>
        <div className="navbar-text">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">Score: {props.currentScore} |&nbsp;</li>
                <li className="nav-item">Top Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
