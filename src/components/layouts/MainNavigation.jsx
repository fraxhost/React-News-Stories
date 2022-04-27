import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import Logout from "../auths/Logout";

function MainNavigation() {
  const authCtx = useContext(AuthContext);

  const loggedIn = authCtx.username !== "" && authCtx.token !== "";

  let content;

  if (loggedIn) {
    content = (
      <Nav>
        <Nav.Link as={NavLink} to="/">
          All Stories
        </Nav.Link>
        <Nav.Link as={NavLink} to="/new-story">
          Add New Story
        </Nav.Link>
      </Nav>
    );
  }

  if (!loggedIn) {
    content = (
      <Nav>
        <Nav.Link as={NavLink} to="/">
          All Stories
        </Nav.Link>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
        {/* <Nav.Link as={NavLink} to="/login" className="justify-content-end">
          Login
        </Nav.Link> */}
      </Nav>
    );
  }

  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h3 className="display-6">News Stories</h3>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-center">
          {content}
        </Navbar.Collapse>
        {loggedIn ? <Logout /> : <p></p>}
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
