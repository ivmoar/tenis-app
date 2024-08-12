import { Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
      <Container fluid>
        <Row>
            <Col>
                <Card className='custom-card'>
                    <Card.Body>
                        <Card.Title className='card-title'>Lunes, 12 de Agosto</Card.Title>
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
                        <Card.Title className='card-title'>Mensajes</Card.Title>
                        <Card.Text>¡No tienes ningún mensaje!</Card.Text>
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