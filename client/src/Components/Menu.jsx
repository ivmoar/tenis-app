import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
            <img
              alt=""
              src="/favicon.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>

        <Navbar.Text className="d-none d-lg-block mx-auto fs-2" style={{ flexGrow: 1 }}>
          Club de Tenis Villacarmen
        </Navbar.Text>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Alumnos</Nav.Link>
              <Nav.Link href="#action2">Monitores</Nav.Link>
              <Nav.Link href="#action2">Clases</Nav.Link>
              <Nav.Link href="#action2">Perfil</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Menu;
