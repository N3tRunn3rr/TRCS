import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
            src="../assets/header_left.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {'TRCS, Inc.'}</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
              About  
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
            FAQ
          </Nav.Link>
          <Nav.Link as={Link} to="/getstarted">
            Get Started
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Services
          </Nav.Link>
            <Nav.Link as={Link} to="/contact">
            Contact
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Navigation;