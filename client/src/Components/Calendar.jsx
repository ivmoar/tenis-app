import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const [events, setEvents] = useState([
    {
      start: moment('2024-08-04T12:00:00').toDate(),
      end: moment('2024-08-04T13:00:00').toDate(),
      title: "Evento 1"
    }
  ]);

  const addEvent = () => {
    const newEvent = {
      start: moment('2024-08-05T14:00:00').toDate(),
      end: moment('2024-08-05T15:00:00').toDate(),
      title: "Evento 2"
    };

    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      views={["month","week", "day"]}
    />
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