import { Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { House, Calendar, Trophy, People } from 'react-bootstrap-icons';

function Menu() {
  const [selectedIcon, setSelectedIcon] = useState('home');

  return (
    <Container>
      <Row className="text-center">
        <Col xs={3} className="menu-item">
          <Link to="/" onClick={() => setSelectedIcon('home')} className="menu-link">
            <div>
              <House className="icons" style={{ color: selectedIcon === 'home' ? 'whitesmoke' : '#717171' }}/>
            </div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Calendar" onClick={() => setSelectedIcon('calendar')} className="menu-link">
              <div>
                <Calendar className="icons" style={{ color: selectedIcon === 'calendar' ? 'whitesmoke' : '#717171' }}/>
              </div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Classes" onClick={() => setSelectedIcon('classes')} className="menu-link">
            <div>
              <Trophy className="icons" style={{ color: selectedIcon === 'classes' ? 'whitesmoke' : '#717171' }}/>
            </div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Alumns" onClick={() => setSelectedIcon('alumns')} className="menu-link">
          <div>
            <People className="icons" style={{ color: selectedIcon === 'alumns' ? 'whitesmoke' : '#717171' }}/>
          </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;