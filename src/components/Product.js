import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  quantity
  } from '../redux/shopping/shopping-actions';

const Product = ({ product, addToCart, cart, quantity }) => {
    const selectedProduct = product;  
    const OnChange = () => {
      quantity(selectedProduct.id, 1);
    }
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
                  <Button  onClick={() => { OnChange(); addToCart(selectedProduct.id); }}
                  variant="success" >Добавить в корзину</Button>
                  </Card.Body>
              </Card>
      
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    quantity: (id, value) => dispatch(quantity(id, value))
  };
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);