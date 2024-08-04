import { Card } from 'react-bootstrap';
import Calendar from './Calendar';
import { Container, Row, Col} from 'react-bootstrap';

function MyCalendar() {
  return (
    <Container fluid>
      <Row>
          <Col>
              <h1>Mi Calendario</h1>
          </Col>
      </Row>
      <Row>
          <Col>
              <Card className='custom-card'>
                  <Card.Body>
                    <Calendar />
                  </Card.Body>
              </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default MyCalendar;