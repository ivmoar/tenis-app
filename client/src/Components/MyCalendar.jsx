import { Card } from 'react-bootstrap';
import Calendar from './Calendar';
import { Container, Row, Col} from 'react-bootstrap';

function MyCalendar() {
  return (
    <Container fluid>
      <Row>
          <Col>
              <Card className='custom-card'>
                  <Card.Body>
                    <Card.Title className='card-title'>Mi Calendario</Card.Title>
                    <Calendar />
                  </Card.Body>
              </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default MyCalendar;