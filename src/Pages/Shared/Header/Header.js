import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut =()=>{
    signOut(auth);
  }

  return (
    <div>
      <div>
        <Navbar fixed="top"
          className="nav-bar"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-inline"
                alt=""
              />{" "}
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#packages">Packages</Nav.Link>
                <Nav.Link href="home#guiders">Guiders</Nav.Link>
                <Nav.Link as={Link} to="blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="about">
                  About
                </Nav.Link>
                {user ? (
                  <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>Signout</button>
                ) : (
                  <Nav.Link as={Link} to="login">
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
