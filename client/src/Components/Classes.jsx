import { classes } from '/Users/ivmoar/Desktop/Raspberrypi/App tenis/client/src/data';
import { Container, Row, Col, Card, ListGroup, Button, ButtonGroup} from 'react-bootstrap';
import moment from 'moment';

function TennisClassList() {
    const today = moment().startOf('day');  // Fecha actual sin hora

    // Filtrar clases de hoy
    const todayClasses = classes.filter(c => moment(c.date).isSame(today, 'day'));

    // Filtrar clases futuras
    const futureClasses = classes.filter(c => moment(c.date).isAfter(today, 'day'));

    // Filtrar clases pasadas
    const pastClasses = classes.filter(c => moment(c.date).isBefore(today, 'day'));
    console.log("Clases pasadas:", pastClasses);
  
    return (
      <Container fluid>
        <Row>
            <Col>
              <ButtonGroup aria-label="Basic example" className="my-button-group bg-dark">
                  <Button className='bg-dark border-dark'>Pasadas</Button>
                  <Button className='bg-dark border-dark'>Hoy</Button>
                  <Button className='bg-dark border-dark'>Próximas</Button>
              </ButtonGroup>
            </Col>
        </Row>
        {/* Clases Pasadas */}
        {pastClasses.length > 0 && (
          <>
            {pastClasses.map(cls => (
              <Row key={cls.id}>
                <Col>
                  <Card className='custom-card mb-3'>
                    <Card.Body>
                        <h1>{moment(cls.date, 'YYYY-MM-DD').format('dddd, D MMMM')}</h1>
                        <hr />
                        <Card.Title>Hora {cls.time}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Pista {cls.court}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {cls.participants.map((p, index) => (
                            <ListGroup.Item key={index}>{p}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </>
        )}

        {/* Clases de Hoy */}
        {todayClasses.length > 0 && (
          <>
            {todayClasses.map(cls => (
              <Row key={cls.id}>
                <Col>
                  <Card className='custom-card mb-3'>
                    <Card.Body>
                        <h1>{moment().format('dddd, D MMMM')}</h1>
                        <hr />
                        <Card.Title>Hora {cls.time}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Pista {cls.court}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {cls.participants.map((p, index) => (
                            <ListGroup.Item key={index}>{p}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </>
        )}
  
        {/* Clases Futuras */}
        {futureClasses.length > 0 && (
          <>
            {futureClasses.map(cls => (
              <Row key={cls.id}>
                <Col>
                  <Card className='custom-card mb-3'>
                    <Card.Body>
                        <h1>{moment(cls.date, 'YYYY-MM-DD').format('dddd, D MMMM')}</h1>
                        <hr />
                        <Card.Title>Hora {cls.time}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Pista {cls.court}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {cls.participants.map((p, index) => (
                            <ListGroup.Item key={index}>{p}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Container>
    );
  }
  
  export default TennisClassList;