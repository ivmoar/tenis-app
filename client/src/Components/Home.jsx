import { Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function Home() {
    return (
      <Container fluid>
        <Row>
            <Col>
                <h1>Información Mensual</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Horas Totales</Card.Subtitle>
                        <Card.Title>38</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Horas Realizadas</Card.Subtitle>
                        <Card.Title>16</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <h3>
                    Clases Totales <Badge bg="secondary">38</Badge>
                </h3>
            </Col>
            <Col>
                <h3>
                    Clases Realizadas <Badge bg="secondary">16</Badge>
                </h3>
            </Col>
        </Row>
      </Container>
    );
};

export default Home;