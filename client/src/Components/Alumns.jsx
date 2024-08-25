import { Container, Row, Col, Card } from 'react-bootstrap';
import { students } from '/Users/ivmoar/Desktop/Raspberrypi/App tenis/client/src/data';  // Importa los datos de ejemplo

function Alumns() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Listado de Alumnos</h1>
              <hr />
              {students.length > 0 ? (
                students.map(student => (
                  <Card key={student.id} className='mb-3'>
                    <Card.Body>
                      <Card.Title>{student.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{student.email}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>No hay alumnos en la lista.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Alumns;