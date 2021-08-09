import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

import { connect } from 'react-redux';
import Product from './Product';

const Products = ({products}) => {
    const allProducts = products;
    const items = allProducts.map((item, idx) => {
      
      return (
          <Col>
            <Product key={idx} product={item}/>          
          </Col>
      );
    });
    return (<ul style={{marginTop: '5em'}}><Row style={{rowGap: '2em'}}>{items}</Row></ul>);
}

const mapStateToProps = state => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products);