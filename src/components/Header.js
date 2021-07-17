import React, { useContext } from "react";
import { UserContext } from "..";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUser(null);

    history.push("/");
  }

  return (
    <>
      <Navbar>
        <Container className="one">
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse className="justify-content-center">
            <Nav>
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => history.push("/routines")}>Routines</Nav.Link>
              <Nav.Link onClick={() => history.push("/activities")}>Activities</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Container className="two">
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse className="justify-content-center">
            {user ? (
              <Nav>
                <Nav.Link onClick={() => history.push("/myroutines")}>My Routines</Nav.Link>
                <Nav.Link onClick={() => history.push("/hello")}>Create New Routine</Nav.Link>
                <Nav.Link onClick={() => history.push("/newactivity")}>Create New Activity</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link onClick={() => history.push("/register")}>Register</Nav.Link>
                <Nav.Link onClick={() => history.push("/login")}>Login</Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;