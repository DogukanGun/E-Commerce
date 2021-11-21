import React, { Component } from "react";
import { Container, Row ,Col} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';


const Marker = ({ text }) => <div>{text}</div>;

class Contact extends Component{

    render(){
        return(
            <Container className="mt-5">
                <Row>
                    <Col >
                        Iletisim bilgileri
                    
                    </Col>
                </Row>
            </Container>
        )
        
    }
}

export default Contact