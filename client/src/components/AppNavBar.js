import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <Link to="/" className="me-5 link-style">
          Home
        </Link>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/searchRepos" className="me-5 link-style">
              Search Repositories
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/searchUser" className="link-style">
              Search User
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
