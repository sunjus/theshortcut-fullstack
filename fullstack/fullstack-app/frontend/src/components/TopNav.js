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
        <NavbarBrand href="/">
          <img src="https://img.icons8.com/nolan/32/share.png" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events">CREATE EVENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/myregistrations">REGISTRATION REQUESTS</NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/login" onClick={logoutHandler}>
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  ) : (
    <Navbar color="dark" dark expand="lg">
      <NavbarBrand href="/">
        <img src="https://img.icons8.com/nolan/32/share.png" />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/events">CREATE EVENTS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/myregistrations">REGISTRATION REQUESTS</NavLink>
          </NavItem>
        </Nav>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/login">Log In</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default TopNav;
