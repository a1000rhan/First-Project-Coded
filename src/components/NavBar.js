import { Button } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import authstore from "../store/AuthStore";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { observer } from "mobx-react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar">
        <NavLink to="/">
          <img width="50px" src={logo} alt="logo" />
        </NavLink>
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
            <NavLink to="/">
              <li className="nav-item ">
                <p className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
            </NavLink>
            <NavLink to="/list">
              <li className="nav-item">
                <a className="nav-link">List</a>
              </li>
            </NavLink>
          </ul>
          <div className="sign">
            <p className="text-light m-2">
              Welocome, {authstore.user ? authstore.user.username : ""}
            </p>
            {authstore.user ? (
              <Button>Log out</Button>
            ) : (
              <>
                <SignInModal />
                <SignUpModal />
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default observer(NavBar);
