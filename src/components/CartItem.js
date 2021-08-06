import { React, useEffect, useState} from 'react';
import { Row, Col, Card } from "react-bootstrap";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import MaskedInput from 'react-maskedinput'
import { quantity, removeFromCart } from '../redux/shopping/shopping-actions';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';

const CartItem = ({cart, quantity, removeFromCart} ) => {

    const changeQuantityPlus = (currentId) => {
        let search = cart.map(name => name.id === currentId ? name.qty : 0);
        let searchInt = parseInt(search);
        console.log(searchInt);
        quantity(currentId, searchInt + 1)
    }

    const changeQuantityMinus = (currentId) => {
       
        let search = cart.map(name => name.id === currentId ? name.qty : 0);
        let searchInt = parseInt(search);
        if(searchInt > 0){

            console.log(searchInt);
            quantity(currentId, searchInt - 1)
        }
        
        else
            removeFromCart(currentId);
    }
   
    return (
        <Row xs={1} md={2} className="g-4">
        {cart.map((_, idx) => (
            <>
            
            <Col>
            <Card>
                <Card.Img variant="top" src={_.img} />
                <Card.Body>
                <Card.Title>{_.name}</Card.Title>                
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <div>{_.cost}<i class="fa-solid fa-cutlery"></i> грн</div>
                <InputGroup style={{flexWrap: 'nowrap'}}>                               
                    <Button variant="outline-secondary" onClick={() => changeQuantityMinus(_.id)}><NavigateBeforeOutlinedIcon/></Button>
                        <MaskedInput mask="111" a11yTitle="2" textAlign="center" name="btn" placeholder={_.qty}/>
                    <Button variant="outline-secondary" onClick={() => changeQuantityPlus(_.id)}><NavigateNextOutlinedIcon/></Button>
                </InputGroup>
                <br></br>
                <Button variant="outline-danger" onClick={() => removeFromCart(_.id)}><BackspaceOutlinedIcon/> Удалить</Button>
            </Col>
            </>
        ))}
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      quantity: (item, value) => dispatch(quantity(item, value)),
      removeFromCart: (itemId) => dispatch(removeFromCart(itemId))
    };
  };

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);