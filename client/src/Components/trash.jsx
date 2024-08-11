<Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">Alumnos</Nav.Link>
              <Nav.Link href="#action2">Monitores</Nav.Link>
              <Nav.Link href="#action2">Clases</Nav.Link>
              <Nav.Link href="#action2">Perfil</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>





App.js:
<div className="App">
      <Header />
      <div className="Div-Center"><ClassCard /></div>
      <div className="Div-Center"><Home /></div>
      <div className="Div-Center"><MyCalendar /></div>
      
      <div className="Div-ButtonHome"><MenuButton /></div>
    </div>