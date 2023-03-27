import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';

export function NavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 navColor">
          <Container fluid>
            <Navbar.Brand href="#">Kawaii Store</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href=".\public\index.html">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Somos Kawaii</Nav.Link>
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#">Lapiceras</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Mochilas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Cartucheras
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#">Mi cuenta</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <CartWidget/>
        </Navbar>
      ))}
    </>
  );
}

