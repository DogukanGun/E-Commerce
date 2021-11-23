import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
import { Col, Stack,Container, Row,Button } from "react-bootstrap";

function Favorites() {
  const { products, favorites, basket, setBasket } = useProducts();

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id == item.id)) {
      setBasket([...basket, item]);
    }
  };

  return (
    <Container
    > 
        <Row className='text-center'>
          
          <h1>Favorites</h1>
          
        {favorites.map((product) => (
        <Col md={3} 
        >
              <ProductCard
              key={product.id}
                title={product.title}
                src={product.image}
                description={product.description}
                price={product.price}
              />

              <Col className="text-center" md={12}>
                  <Button className="w-50 mt-4"variant="primary" onClick={() => addBasket(product)}>Add Basket</Button>
              </Col>
          </Col>
        ))}
       </Row>
    </Container>
  );
}

export { Favorites };
