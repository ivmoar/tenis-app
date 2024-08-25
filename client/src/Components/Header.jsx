import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="custom-header bg-dark">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              id="image-logo"
              alt="logo-club"
              src="/favicon.png"
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