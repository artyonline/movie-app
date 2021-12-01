import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ProfileDropdown from "./ProfileDropdown";

// Icons
import { Cart4 } from "react-bootstrap-icons";

export default function Header({ logout }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/wishlist">
            <Cart4 />
          </Nav.Link>
          <ProfileDropdown logout={logout} />
        </Nav>
      </Container>
    </Navbar>
  );
}
