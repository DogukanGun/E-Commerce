import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  Nav,
  Navbar,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function ProductCard(props) {
  return (
    <Container>
      <Row>
        <Card style={styles.container}>
          <Card.Body style={styles.body}>
            <Card.Img style={styles.image} variant="top" src={props.src} />
            <Card.Title>{props.title.substring(1, 10)}</Card.Title>
            <Card.Text>{props.description.substring(1, 30)}</Card.Text>
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

const styles = {
  container: {
    width: "18rem",
    height: "30rem",
    marginTop: "5rem",
    padding: "1rem",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "auto",
    width: "10rem",
    margin: "auto",
  },
};

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" className="fixed-top">
      <Container>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites">
            Favorites
          </Nav.Link>
          <Nav.Link as={Link} to="/basket">
            Basket
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
function CustomFooter() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="position-static sticky-bottom"
    >
      <Container>
        <Row>
          <p className="text-white">&copy; 2021 Company, Inc</p>
        </Row>
      </Container>
    </Navbar>
  );
}

export { ProductCard, CustomNavbar, CustomFooter };
