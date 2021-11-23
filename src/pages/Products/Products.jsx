import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { Col, Container,Row } from "react-bootstrap";
function Products() {
  const { products } = useProducts();
  return (
    <Container>
      <Row>
        <Col className="mt-3 text-center" sm={12}>
            <h1>Products</h1>
        </Col> 
        
      
        {products.map((product) => (
          <Col 
          >
          <Link
            to={`/${product.id}`}
            key={product.id}
          >
            <ProductCard
              title={product.title}
              src={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          </Link>
          </Col>
        ))}
      
      </Row>
    </Container>
  );
}

export { Products };
