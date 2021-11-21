import React from "react";
import { Col, Container,Row,Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';


function ProductDetail(){
    let { id } = useParams();
    return(
        <Container>
            <Row className="mt-5">
                <Col className="text-center" sm={12}>
                    Baslik buraya
                </Col>
                <Col sm={4}>
                    Resim buraya
                </Col>
                <Col sm={8}>
                    Metin buraya
                </Col>
            </Row>
            <Row className="mt-5 justify-content-around">
                <Col sm={2}>
                    <Button variant="primary">
                        Favoriye Ekle
                    </Button>
                </Col>
                <Col sm={2}>
                    <Link to="/basket"> 
                        <Button variant="primary">
                            Sepete Ekle
                        </Button>
                    </Link>


                    
                </Col>


            </Row>
        </Container>
    )
}

export default ProductDetail

