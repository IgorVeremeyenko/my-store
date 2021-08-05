import React from 'react';
import { Row, Col, Card } from "react-bootstrap";
import { connect } from 'react-redux';

const CartItem = ({cart}) => {
    return (
        <Row xs={1} md={2} className="g-4">
        {cart.map((_, idx) => (
            <>
            <Col>
            <Card>
                <Card.Img variant="top" src={_.img} />
                <Card.Body>
                <Card.Title>{_.name}</Card.Title>
                {/* <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                </Card.Text> */}
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <div>{_.cost} грн</div>
            </Col>
            </>
        ))}
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartItem);