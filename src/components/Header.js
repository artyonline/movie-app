import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

// Icons
import { Cart4 } from 'react-bootstrap-icons';
import { PersonCircle } from 'react-bootstrap-icons';

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/wishlist"><Cart4/></Nav.Link>
          <Nav.Link href="/profile"><PersonCircle/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
