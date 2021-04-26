import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar is-dark">
      <Link to="/">
        <div className="navbar-brand navbar-item has-text-primary has-text-weight-bold">
          <img src={logo} alt="React E-Commerce" />
          REACT DJANGO APP
        </div>
      </Link>
      <div className="navbar-menu">
        <div className="navbar-end  ">
          <div className="navbar-item">
            <Link to="/login" className="button is-primary is-rounded ">
              Log In
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/protected" className="button is-link is-rounded">
              Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
