import React, { useState, useContext, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../user-context";
import api from "../services/api";

const TopNav = ({ history }) => {
  //filter
  const user_id = localStorage.getItem("user_id");
  const user = localStorage.getItem("user");

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  //
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  };

  //filter
  /*
  useEffect(() => {
    getEvents();
  }, []);

  const category = (query) => {
    getEvents(query);
  };

  const myEventsHandler = async () => {
    try {
      const response = await api.get("/user/events", { headers: { user } });
      console.log(response.data.events);
      setEvents(response.data.events);
    } catch (error) {
      history.push("/login");
    }
  };
  /*
  const getEvents = async (params) => {
    try {
      const url = params ? `/dashboard/${params}` : "/dashboard";
      const response = await api.get(url, { headers: { user } });
      setEvents(response.data.events);
    } catch {
      history.push("/login");
    }
  };
  */
  //
  return isLoggedIn ? (
    <div>
      <Navbar color="dark" dark expand="lg">
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

          <NavLink
            href="/login"
            onClick={logoutHandler}
            style={{ float: "right" }}
          >
            <img src="https://img.icons8.com/windows/32/000000/mobile-shop-secured-login.png" />
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  ) : (
    <div>
      <img src="https://img.icons8.com/windows/16/000000/mobile-shop-secured-login.png" />
    </div>
  );
};

export default TopNav;
