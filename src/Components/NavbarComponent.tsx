import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Jobs Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Job 1 Nvidia</Nav.Link>
            <Nav.Link as={Link} to='/jobtwo'>Job 2 Codestack</Nav.Link>
            <Nav.Link as={Link} to='/jobthree'>Job 3 Discogs</Nav.Link>
            <Nav.Link as={Link} to='/jobfour'>Job 4 Spotify</Nav.Link>
            <Nav.Link as={Link} to='/jobfive'>Job 5 YZY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;