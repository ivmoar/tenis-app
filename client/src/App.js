import Card from './Components/HomeCard';
import Menu from './Components/Menu';
import MenuButton from './Components/MenuButton';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="Div-Center"><Card /></div>
      <div className="Div-ButtonHome"><MenuButton /></div>
    </div>
  );
}

export default App;
