import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClassCard from './Components/ClassCard';
import Header from './Components/Header';
import MyCalendar from './Components/MyCalendar';
import Home from './Components/Home';
import MenuFooter from './Components/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calendar" element={<MyCalendar />} />
            <Route path="/Alumns" element={<Home />} />
            <Route path="/Classes" element={<Home />} />
          </Routes>
        </div>
        <div className='MenuFooter'><MenuFooter /></div>
      </Router>
    </div>
  );
}

export default App;