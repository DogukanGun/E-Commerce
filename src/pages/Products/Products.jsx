import { useProducts } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { Col, Container, Row } from "react-bootstrap";
function Products() {
  const { products } = useProducts();
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={3}>
            <Link style={styles.link} to={`/${product.id}`} key={product.id}>
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

const styles = {
  link: {
    textDecoration: "none",
    color: "#001",
  },
};

export { Products };
