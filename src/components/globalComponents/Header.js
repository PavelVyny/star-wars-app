import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
	return (
		<>
			<Navbar bg="light" expand="lg" sticky="top">
				<Navbar.Brand as={NavLink} to="/">
					Y.school store
        		</Navbar.Brand>
				<Nav.Link as={NavLink} to="/favorites" className="list__favorites position-relative">
					Favorites list
				</Nav.Link>
			</Navbar>
		</>
	);
};

export default Header;
