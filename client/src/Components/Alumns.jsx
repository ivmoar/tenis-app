import { Container, Row, Col, Card, Modal, Button, Form } from 'react-bootstrap';
import { students } from '/Users/ivmoar/Desktop/Raspberrypi/App tenis/client/src/data';  // Importa los datos de ejemplo
import { PlusSquare } from 'react-bootstrap-icons';
import { useState } from 'react';

function Alumns() {
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  const handleCreate = () => {
    setSelectedStudent(null);
    handleShow();
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    handleShow();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la creación o edición del alumno
    // Dependiendo de si selectedStudent es null o no
    handleClose();
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <h1>Alumnos</h1>
                <PlusSquare 
                  className="text-primary" 
                  size={30} 
                  style={{ cursor: 'pointer' }} 
                  onClick={handleCreate} 
                />
              </div>
              <hr />
              {students.length > 0 ? (
                students.map(student => (
                  <Card 
                    key={student.id} 
                    className='mb-3' 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => handleEdit(student)}
                  >
                    <Card.Body className='cards-card'>
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

      {/* Modal para crear o editar alumno */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedStudent ? 'Editar Alumno' : 'Añadir Alumno'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formStudentName">
              <Form.Label>Nombre del Alumno</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Introduce el nombre" 
                defaultValue={selectedStudent ? selectedStudent.name : ''} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formStudentEmail" className="mt-3">
              <Form.Label>Email del Alumno</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Introduce el email" 
                defaultValue={selectedStudent ? selectedStudent.email : ''} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              {selectedStudent ? 'Guardar Cambios' : 'Añadir'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Alumns;