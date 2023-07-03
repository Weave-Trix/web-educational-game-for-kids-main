import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

export default function SecretNav(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">EduKids IICP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home Page</Nav.Link>
              {/* <Nav.Link href="/about-us">Hakkımızda</Nav.Link> */}
            </Nav>
            <Nav>
              <Navbar.Brand>
                <small>Welcome, </small> <strong> {props.user}</strong>
              </Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link style={{ color: "alphablue" }} href="/logout">
                Exit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
