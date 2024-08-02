import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col} from 'react-bootstrap';

function TextExample() {
  return (
    <Container fluid>
        <Row>
            <Col>
                <h1>Tienes 1 clase hoy</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='custom-card'>
                    <Card.Body>
                        <Card.Title>Hora 18:30</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Pista 5</Card.Subtitle>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Lucía Aguilar</ListGroup.Item>
                            <ListGroup.Item>Luis Fernando</ListGroup.Item>
                            <ListGroup.Item>David Acebedo</ListGroup.Item>
                            <ListGroup.Item>Leandro Moreno</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary">Ir a la clase</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default TextExample;