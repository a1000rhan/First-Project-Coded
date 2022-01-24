import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar">
        <Link to="/">
          <img width="50px" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item active">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/list">
              <li className="nav-item">
                <a className="nav-link">List</a>
              </li>
            </Link>
          </ul>
          <div className="sign">
            <SignInModal />
            <SignUpModal />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
