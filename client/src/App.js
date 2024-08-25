import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Calendar from './Components/Calendar';
import MenuFooter from './Components/Menu';
import Classes from './Components/Classes';
import Alumns from './Components/Alumns';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='MenuHeader'><Header /></div>
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Alumns" element={<Alumns />} />
            <Route path="/Classes" element={<Classes />} />
          </Routes>
        </div>
        <div className='MenuFooter bg-dark'><MenuFooter /></div>
      </Router>
    </div>
  );
}

export default App;