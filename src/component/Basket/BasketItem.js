import React from "react";
import { Col, Container,Row,Button } from "react-bootstrap";

function BasketItem(){
    return(
        <Container>
            <Row>
                <Col sm={4}>
                    Buraya Resim
                </Col>
                <Col sm={6}>
                    Buraya Isim vb 
                </Col>
                <Col sm={2}>
                    <Button>
                        Sil
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default BasketItem;