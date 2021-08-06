import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import Products from './components/Products';
import Basket from './components/basket';

function App() {
  return (
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Магазин</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Новости</Nav.Link>
            <Nav.Link href="#pricing">Цены</Nav.Link>
          </Nav>
          <Navbar.Brand ><Basket /></Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Products />
        </Row>
      </Container>
    </Container>
  );
}

export default App;
