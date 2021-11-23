import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
import { Col, Container,Row } from "react-bootstrap";
function Basket() {
  const { basket } = useProducts();

  return (
    <Container>
        <Row className="mt-5">

          <Col className="mt-3 text-center" sm={12}>
            <h1>Basket</h1>
          </Col>
          
      
        {basket.map((product) => (
          <Col key={product.id} className="mt-3" sm={12}>
              <ProductCard
                title={product.title}
                src={product.image}
                description={product.description}
                price={product.price}
              />
          </Col>
             
              
         ))}
      </Row>
    </Container>
  );
}

export { Basket };
