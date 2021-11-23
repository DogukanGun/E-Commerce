import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
import { Col, Stack, Container, Row, Button } from "react-bootstrap";

function Favorites() {
  const { products, favorites, basket, setBasket } = useProducts();

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id == item.id)) {
      setBasket([...basket, item]);
    }
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row className="mt-5">
        <Col className="mt-3 text-center" sm={12}>
          <h1>Favorites</h1>
        </Col>

        {favorites.map((product) => (
          <Col sm={12} md={3}>
            <ProductCard
              key={product.id}
              title={product.title}
              src={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
            />

            <Col className="text-center" md={12}>
              <Button
                className="w-50 mt-4"
                variant="primary"
                onClick={() => addBasket(product)}
              >
                Add Basket
              </Button>
            </Col>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favorites };
