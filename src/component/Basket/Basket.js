import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import BasketItem from "./BasketItem";


function Basket(){
    return(
        <Container>
            <Row className="mt-5">
                <Col className="mt-3 text-center" sm={12}>
                    <h1>Basket</h1>
                </Col>
                <Col className="mt-3" sm={12}>
                    <BasketItem/>
                </Col>
                <Col className="mt-3" sm={12}>
                    <BasketItem/>
                </Col>
                
                <Col className="mt-3" sm={12}>
                    <BasketItem/>
                </Col>
                
                <Col className="mt-3" sm={12}>
                    <BasketItem/>
                </Col>
                
                
            </Row>
        </Container>
    )
}

export default Basket;

