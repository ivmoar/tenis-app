import Button from 'react-bootstrap/Button';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Container>
      <Row className="text-center">
        <Col xs={3} className="d-flex justify-content-center">
          <Link to="/">
            <img
              alt="home"
              src="/hogar.png"
              className="menu-image"
            />
          </Link>
        </Col>
        <Col xs={3} className="d-flex justify-content-center">
          <Link to="/Calendar">
            <img
              alt="calendar"
              src="/calendario.png"
              className="menu-image"
            />
          </Link>
        </Col>
        <Col xs={3} className="d-flex justify-content-center">
          <Link to="/Classes">
            <img
              alt="classes"
              src="/raqueta.png"
              className="menu-image"
            />
          </Link>
        </Col>
        <Col xs={3} className="d-flex justify-content-center">
          <Link to="/Alumns">
            <img
              alt="alumns"
              src="/hombre-saltando.png"
              className="menu-image"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;