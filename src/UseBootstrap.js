import React, { Component } from "react";
import {Button,Container,Row,Col} from "react-bootstrap";
export default class UseBootstrap extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => alert("item Clicked")}>Click me</Button>

        <Container>
          <Row>
            <Col sm={8}>sm=8</Col>
            <Col sm={4}>sm=4</Col>
          </Row>
          <Row className="container">
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
    