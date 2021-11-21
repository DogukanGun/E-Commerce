import React from "react";
import Product from "../Product/Product";
import {Col, Container,Row} from "react-bootstrap"


function Products(){

    return(
        <Container>
              <Row >

                <Col className="pt-5">
                    <Product/>
                </Col>
                <Col className="pt-5">
                    <Product/>
                </Col>
                <Col className="pt-5">
                    <Product/>
                </Col>
                <Col className="pt-5">
                    <Product/>
                </Col>
                <Col className="pt-5">
                    <Product/>
                </Col>
                
            </Row>
            
        </Container>        
    )
}

export default Products