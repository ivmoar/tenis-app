import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import moment from 'moment';


function Home() {
    return (
      <Container fluid>
        <Row>
            <Col>
                <Card className='custom-card'>
                    <Card.Body>
                        <h1>{moment().format('dddd, D MMMM')}</h1>
                        <hr />
                        <Card.Text>¡Tienes 0 clases para hoy!</Card.Text>
                        <Button>Ir a Mis Clases</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <Card className='custom-card'>
                    <Card.Body>
                        <Card.Title className='card-title'>Mi resumen mensual</Card.Title>
                        <Row>
                            <Col>
                                <Card className='inline-blue-card'>
                                    <Card.Body>
                                        <Card.Text>Horas: 20</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='inline-green-card'>
                                    <Card.Body>
                                        <Card.Text>Restantes: 12</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <Card className='inline-yellow-card'>
                                    <Card.Body>
                                        <Card.Text>Clases: 8</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='inline-red-card'>
                                    <Card.Body>
                                        <Card.Text>Dinero: 75€</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    );
};

export default Home;