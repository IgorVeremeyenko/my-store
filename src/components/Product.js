import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  removeFromCart  
  } from '../redux/shopping/shopping-actions';

const Product = ({ product, addToCart, cart, removeFromCart }) => {
    const selectedProduct = product; 
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
      cart.forEach(item => {
        if(item.id === selectedProduct.id){
          if(item.qty > 0)
            setCartCount(item.qty);
        };
      });
    }, [cart, removeFromCart, cartCount])
  return (
          <Card style={{ width: '18em' }} border="dark">
                  <Card.Header>{selectedProduct.name}</Card.Header>
                  <Card.Img variant="top" src={selectedProduct.img} />
                  <Card.Body>
                  <Card.Title>{selectedProduct.cost} грн</Card.Title>
                  <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                  </Card.Text>
                  {cartCount ? 
                    <Button  
                      onClick={() => { removeFromCart(selectedProduct.id); setCartCount(0) }}
                      variant="danger">
                      Удалить из корзины
                    </Button>                    
                    :
                    <Button  onClick={() => { addToCart(selectedProduct.id); }}
                    variant="success">
                      Добавить в корзину
                      </Button>
                  }
                  </Card.Body>
              </Card>
      
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId))
  };
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);