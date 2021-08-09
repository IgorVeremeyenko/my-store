import { React, useState, useEffect} from 'react';
import { Row, Col, Card, Container } from "react-bootstrap";
import { connect } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
// import MaskedInput from 'react-maskedinput';
import { quantity, removeFromCart } from '../redux/shopping/shopping-actions';
// import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
const CartItem = ({items}) => {
    const [count, setCount] = useState(items.qty);
    const handleRender = (e) => {
        setCount(e.target.value);
        quantity(items.id, e.target.value);
        console.log(items.id, e.target.value);
        console.log(items.qty)
    }
    useEffect(() => {
        console.log('change count');
        quantity(items.id, count);
        console.log(items.qty)
    }, [count])
    return (
        <Container>
                <>
                <hr></hr>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={items.img} />
                        <Card.Body>
                        <Card.Title>{items.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <div>{items.cost}<i className="fa-solid fa-cutlery">  грн</i></div>                        
                        <InputGroup>
                            <Button variant="outline-secondary" onClick={() => {setCount(count - 1); }}><NavigateBeforeOutlinedIcon/></Button>
                            <FormControl
                                value={count} 
                                min="1"
                                onChange={(e) => handleRender(e)}    
                            />
                            <Button variant="outline-secondary" onClick={() => setCount(count + 1)}><NavigateNextOutlinedIcon/></Button>
                        </InputGroup>                           
                        <hr></hr>
                        <Button variant="outline-danger" onClick={() => removeFromCart(items.id)}>Удалить</Button>                 
                    </Col>  
                </Row>  
                </>  
        </Container>
    )
    
}

const mapDispatchToProps = (dispatch) => {
    return {
      quantity: (itemId, value) => dispatch(quantity(itemId, value)),
      removeFromCart: (itemId) => dispatch(removeFromCart(itemId))
    };
  };


export default connect(null, mapDispatchToProps)(CartItem);