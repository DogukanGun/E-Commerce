import React from "react";
import { Link } from "react-router-dom";
import { Col, Container,Row,Button,Card,Nav,Navbar,ListGroup,ListGroupItem} from "react-bootstrap";

function ProductCard(props) {
  return (
    <Container>
            <Row>
              <Card style={{ width: '18rem', height:'25rem',marginTop:'5rem'}}>
                <Card.Img style={{height:'10rem'}} variant="top" src={props.src} />
                  <Card.Body>
                    <Card.Title>{props.title.substring(1,10)}</Card.Title>
                    <Card.Text>
                      {props.description.substring(1,30)}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{props.category}</ListGroupItem>
                    <ListGroupItem>{props.price} $</ListGroupItem>
                  </ListGroup>
              </Card>
            </Row>
        </Container>
    
  );
}

function CustomNavbar(){

  return(
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
          <Nav className="me-auto"> 
            <Nav.Link as={Link} to="/">Home</Nav.Link> 
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link> 
            <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link> 
            <Nav.Link as={Link} to="/basket">Basket</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

  )
}
function CustomFooter(){
    return(
        <Container className="fixed-bottom">
            <Row>
                <p className="col-md-4 mb-0 text-muted">&copy; 2021 Company, Inc</p>

                <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="" className="nav-link px-2 text-muted">Home</a></li> 
                </ul>
            </Row>
        </Container>
    )
    
}

export { ProductCard,CustomNavbar,CustomFooter };
