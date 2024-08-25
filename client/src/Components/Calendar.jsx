import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form} from 'react-bootstrap';

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      start: moment('2024-08-04T12:00:00').toDate(),
      end: moment('2024-08-04T13:00:00').toDate(),
      title: "Evento 1"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: ''
  });

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      // Editar evento existente
      setEvents(events.map(event => 
        event === selectedEvent ? { ...selectedEvent, ...newEvent } : event
      ));
    } else {
      // Añadir nuevo evento
      setEvents([...events, {
        title: newEvent.title,
        start: moment(newEvent.start).toDate(),
        end: moment(newEvent.end).toDate()
      }]);
    }
    setShowModal(false);
    setNewEvent({ title: '', start: '', end: '' });
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event !== selectedEvent));
    setShowModal(false);
  };

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setNewEvent({ title: '', start: '', end: '' });
    setShowModal(true);
  };

  return (
    <Container fluid>
      <Row>
          <Col>
              <Card className='custom-card'>
                  <Card.Body>
                    <h1>Mi Calendario</h1>
                    <hr />
                    <Calendar
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 500 }}
                      views={["month", "week", "day"]}
                      onSelectEvent={handleSelectEvent}
                    />
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>{selectedEvent ? 'Editar Evento' : 'Añadir Evento'}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                              type="text"
                              value={newEvent.title}
                              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Fecha y Hora de Inicio</Form.Label>
                            <Form.Control
                              type="datetime-local"
                              value={newEvent.start}
                              onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Fecha y Hora de Fin</Form.Label>
                            <Form.Control
                              type="datetime-local"
                              value={newEvent.end}
                              onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        {selectedEvent && (
                          <Button variant="danger" onClick={handleDeleteEvent}>
                            Eliminar
                          </Button>
                        )}
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                          Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleSaveEvent}>
                          Guardar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
              </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default MyCalendar;

/*
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

// Definir la función externa para agregar un nuevo evento
const addEvent = (start, end, title, prevEvents, setEvents) => {
  const newEvent = {
    start: moment(start).toDate(),
    end: moment(end).toDate(),
    title
  };

  setEvents([...prevEvents, newEvent]);
};

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      start: moment('2024-08-04T12:00:00').toDate(),
      end: moment('2024-08-04T13:00:00').toDate(),
      title: "Evento 1"
    }
  ]);

  // Estado para el formulario
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Manejador del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    addEvent(startDate, endDate, title, events, setEvents);
    // Limpiar el formulario
    setTitle('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha y Hora de Inicio:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha y Hora de Fin:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Evento</button>
      </form>
    </div>
  );
}

export default MyCalendar;
*/