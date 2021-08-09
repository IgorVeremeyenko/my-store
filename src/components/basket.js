import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Badge } from 'reactstrap';
import EstimatedTotal from './EstimatedTotal'
import { connect } from 'react-redux';
import CartItem from './CartItem';

function Basket({ cart }) {
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    console.log('useEffect');
    let count = 0;
    let price = 0;
    cart.forEach(item => {
      count += item.qty;
      price += item.cost * item.qty;
    });
    setCartCount(count);
    setPrice(price);
  }, [cart, price, cartCount, setCartCount, setPrice])


  const add = () => {
    setCartCount(cartCount + 1);
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const items = cart.map((item, idx) => (
    <>
    <CartItem items={item} key={idx}/>  
    </>
  ))

  return (
    <>
      <Button variant="outline-success" onClick={handleShow} className="me-2">
        Корзина   <></>
      <ShoppingCartIcon/><Badge bg="secondary">{cartCount > 0 ? cartCount : <></>}</Badge>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* <CartItem/> */}
            {items}
            {cart != 0 ? <><hr></hr><EstimatedTotal value={price}/></> : <><h2>Пусто</h2></>}
              {/*<ItemDetails /> */}
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