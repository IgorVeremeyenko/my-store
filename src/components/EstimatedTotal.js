import React from "react";
import { Row, Col } from "react-bootstrap";

export default function EstimatedTotal({value}) {
  
    return (
      <Row>
        <Col xs={8}>
          <h3>Всего к оплате:</h3>
        </Col>
        <Col xs={6}>
          <h3>{value} грн</h3>
        </Col>
      </Row>
    );
  
}