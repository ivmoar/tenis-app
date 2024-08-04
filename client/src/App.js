import { Button } from 'react-bootstrap';
import ClassCard from './Components/ClassCard';
import Header from './Components/Header';
import MenuButton from './Components/MenuButton';
import MyCalendar from './Components/MyCalendar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Div-Center"><ClassCard /></div>
      <div className="Div-Center"><MyCalendar /></div>
      <div className="Div-ButtonHome"><MenuButton /></div>
    </div>
  );
}

export default App;