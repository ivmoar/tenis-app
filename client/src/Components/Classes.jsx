import { classes } from '/Users/ivmoar/Desktop/Raspberrypi/App tenis/client/src/data';
import { Container, Row, Col, Card, ListGroup, Button, ButtonGroup, Modal } from 'react-bootstrap';
import moment from 'moment';
import { useState } from 'react';

function TennisClassList() {
  const [selectedCategory, setSelectedCategory] = useState('Hoy');
  const [selectedClass, setSelectedClass] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const today = moment().startOf('day');  // Fecha actual sin hora
  // Filtrar clases de hoy
  const todayClasses = classes.filter(c => moment(c.date).isSame(today, 'day'));
  // Filtrar clases futuras
  const futureClasses = classes.filter(c => moment(c.date).isAfter(today, 'day'));
  // Filtrar clases pasadas
  const pastClasses = classes.filter(c => moment(c.date).isBefore(today, 'day'));

  const getClassesToShow = () => {
    if (selectedCategory === 'Pasadas') {
      return pastClasses;
    } else if (selectedCategory === 'Hoy') {
      return todayClasses;
    } else if (selectedCategory === 'Próximas') {
      return futureClasses;
    }
    return [];
  };

  const handleCardClick = (cls) => {
    setSelectedClass(cls);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);
  
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Mis clases</h1>
              <hr />
              <ButtonGroup aria-label="Basic example" className="my-button-group bg-dark mb-3">
                <Button 
                  className={`bg-dark border-dark ${selectedCategory === 'Pasadas' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Pasadas')}
                >
                  Pasadas
                </Button>
                <Button 
                  className={`bg-dark border-dark ${selectedCategory === 'Hoy' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Hoy')}
                >
                  Hoy
                </Button>
                <Button 
                  className={`bg-dark border-dark ${selectedCategory === 'Próximas' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Próximas')}
                >
                  Próximas
                </Button>
              </ButtonGroup>

              {/* Mostrar clases según la categoría seleccionada */}
              {getClassesToShow().map(cls => (
                <Row key={cls.id}>
                  <Col>
                    <Card 
                      className='custom-card mb-3' 
                      style={{ cursor: 'pointer' }} 
                      onClick={() => handleCardClick(cls)}
                    >
                      <Card.Body className='cards-card'>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal para mostrar más información sobre la clase seleccionada */}
      {selectedClass && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Detalles de la Clase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{moment(selectedClass.date, 'YYYY-MM-DD').format('dddd, D MMMM')}</h5>
            <p><strong>Hora:</strong> {selectedClass.time}</p>
            <p><strong>Pista:</strong> {selectedClass.court}</p>
            <p><strong>Participantes:</strong></p>
            <ListGroup variant="flush">
              {selectedClass.participants.map((p, index) => (
                <ListGroup.Item key={index}>{p}</ListGroup.Item>
              ))}
            </ListGroup>
            {/* Aquí puedes añadir más detalles a futuro */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}
  
export default TennisClassList;