import React from "react";
import logo from "../logo.svg";
//import { Link } from "react-router-dom";
function Navbar() {
	return (
		<nav className="navbar is-dark">
			<div className="navbar-brand navbar-item has-text-primary has-text-weight-bold">
				<img src={logo} alt="React E-Commerce" />
				REACT DJANGO APP
			</div>
			<div className="navbar-menu">
				<div className="navbar-end  ">
					<div className="navbar-item">
						<a href="/" className="button is-primary is-rounded ">
							Log In
						</a>
					</div>
					<div className="navbar-item">
						<a href="/" className="button is-danger is-rounded">
							Log Out
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
