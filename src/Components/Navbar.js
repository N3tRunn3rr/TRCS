import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">
        <img
            src="/header_left.jpg"
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
          <Nav.Link as={Link} to="/about">
              About  
            </Nav.Link>
            <Nav.Link as={Link} to="/faq">
            FAQ
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