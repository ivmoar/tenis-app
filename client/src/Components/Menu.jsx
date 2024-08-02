import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar expand="lg" className="custom-menu">
      <Container fluid>
        <Navbar.Brand href="#">
            <img
              alt="logo-club"
              src="/favicon.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>

        <Navbar.Text className="custom-menu-text">
          Nombre usuario
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Menu;