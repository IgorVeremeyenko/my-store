import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Badge } from 'reactstrap';
import EstimatedTotal from './EstimatedTotal'
import { connect } from 'react-redux';
import CartItem from './CartItem';

function Basket({ cart }) {
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach(item => {
      count += item.qty;
    });
    setCartCount(count);
    console.log(cartCount);
  }, [cart, cartCount])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="outline-success" onClick={handleShow} className="me-2">
        Корзина   <></>
      <ShoppingCartIcon/><Badge bg="secondary">{cartCount}</Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="purchase-card">
            <Container>
              <CartItem />             
              <br />    
              <hr />
              <EstimatedTotal />
              {/* <br />
              <ItemDetails /> */}
            </Container>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Basket);