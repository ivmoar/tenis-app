import { Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

function Menu() {
  const [selectedIcon, setSelectedIcon] = useState('home');

  return (
    <Container>
      <Row className="text-center">
        <Col xs={3} className="menu-item">
          <Link to="/" onClick={() => setSelectedIcon('home')} className="menu-link">
            <div>
              <HomeIcon
                style={{
                fontSize: 40,
                color: selectedIcon === 'home' ? 'blue' : 'black',
              }}
              />
            </div>
            <div><span style={{ color: selectedIcon === 'home' ? 'blue' : 'black',}}>Inicio</span></div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Calendar" onClick={() => setSelectedIcon('calendar')} className="menu-link">
              <div>
                <CalendarTodayIcon
                  style={{
                  fontSize: 40,
                  color: selectedIcon === 'calendar' ? 'blue' : 'black',
                }}
                />
              </div>
              <div><span style={{ color: selectedIcon === 'calendar' ? 'blue' : 'black',}}>Calendario</span></div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Classes" onClick={() => setSelectedIcon('classes')} className="menu-link">
            <div>
              <SportsTennisIcon
                style={{
                fontSize: 40,
                color: selectedIcon === 'classes' ? 'blue' : 'black',
              }}
              />
            </div>
            <div><span style={{ color: selectedIcon === 'classes' ? 'blue' : 'black',}}>Clases</span></div>
          </Link>
        </Col>
        <Col xs={3} className="menu-item">
          <Link to="/Alumns" onClick={() => setSelectedIcon('alumns')} className="menu-link">
          <div>
            <SchoolIcon
              style={{
                fontSize: 40,
                color: selectedIcon === 'alumns' ? 'blue' : 'black',
              }}
            />
          </div>
          <div><span style={{ color: selectedIcon === 'alumns' ? 'blue' : 'black',}}>Alumns</span></div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;