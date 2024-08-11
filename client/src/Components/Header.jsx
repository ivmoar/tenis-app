import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="custom-header">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              alt="logo-club"
              src="/favicon.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Text className="custom-header-text">
          Nombre usuario
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;