import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const AppNavBar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <Link to="/" style={linkStyle} className="me-5">
          Home
        </Link>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/searchRepos" style={linkStyle} className="me-5">
              Search Repositories
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/searchUser" style={linkStyle}>
              Search User
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
