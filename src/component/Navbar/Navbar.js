import React from "react"
import {Navbar,Container,Nav} from 'react-bootstrap'
function CustomNavbar(){

    return(
        <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link> 
      <Nav.Link href="/contact">Contact</Nav.Link> 
    </Nav>
    </Container>
  </Navbar>

    )
}

export default CustomNavbar