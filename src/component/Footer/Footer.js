import React from "react"
import {Row,Container} from 'react-bootstrap'
function CustomFooter(){
    return(
        <Container className="fixed-bottom">
            <Row>
                <p class="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                </a>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="" class="nav-link px-2 text-muted">Home</a></li> 
                </ul>
            </Row>
        </Container>
    )
    
}

export default CustomFooter