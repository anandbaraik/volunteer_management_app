import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      className="px-4 py-2"
      bg="primary"
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" className="font-weight-bold text-light">
        Vms
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/volunteers" className="mr-3 text-light">
            Volunteers
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className="text-light">
            Events
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
