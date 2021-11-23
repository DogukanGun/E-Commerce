import { useParams, Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
import { Col, Stack,Container, Row,Button } from "react-bootstrap";

function Product() {
  const { id } = useParams();
  const { products, favorites, setFavorites, basket, setBasket } =
    useProducts();
  const selectedProduct = products.filter((product) => product.id == id);
  const addFav = (item) => {
    /* 
    if (products.some((favoritesItem) => favoritesItem.id !== item.id)) {
      setFavorites([...favorites, item]);
    }
    */

    selectedProduct.id !== item.id && setFavorites([...favorites, item]);
    console.log(favorites);

    // products.filter((product) => product.id !== item.id) &&
    //   setFavorites([...favorites, item]);
  };

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id === item.id)) {
      setBasket([...basket, item]);
    }
  };

  return (
    <Container 
    >
      <Row >
      <Col className="col-md-3 text-center mx-auto">
      <h1>Product Page</h1>
      {selectedProduct.map((product) => (
        <Col 
          key={product.id}
        > 
        
        
          <ProductCard
            title={product.title}
            src={product.image}
            description={product.description}
            category={product.category}
            price={product.price}
          />
          <Stack className="mt-2 justify-content-md-center" direction="horizontal" gap={3}>
            <Button variant="primary" onClick={() => addFav(product)}>Add Favorites</Button>

            <Button variant="primary" onClick={() => addBasket(product)}>Add Basket</Button>
          </Stack>
      
          
        </Col>
          
      ))}
      </Col>
      </Row>
    </Container>
  );
}

export { Product };
