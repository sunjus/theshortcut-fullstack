import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../user-context";

const TopNav = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <div>
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">SG</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/events">Create Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/myregistrations">Registration Requests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Dashboard</NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/login" onClick={logoutHandler}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  ) : (
    " "
  );
};

export default TopNav;
