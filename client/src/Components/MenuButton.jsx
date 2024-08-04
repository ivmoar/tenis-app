import { Dropdown, DropdownButton } from 'react-bootstrap';

function MenuButton() {
    return (
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="custom-center-button">
            Menú
          </Dropdown.Toggle>
    
          <Dropdown.Menu className='custom-dropdown-menu'>
            <Dropdown.Item href="#/action-1">Calendario</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mis clases</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Alumnos</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default MenuButton;