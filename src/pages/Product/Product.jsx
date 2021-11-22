import { useParams, Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";

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

    // products.filter((product) => product.id !== item.id) &&
    //   setFavorites([...favorites, item]);
  };

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id === item.id)) {
      setBasket([...basket, item]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Product Page</h1>
      {selectedProduct.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            width: "20vw",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "20px",
          }}
        >
          <Link to="/">GO HOME</Link>
          <ProductCard
            title={product.title}
            src={product.image}
            description={product.description}
            price={product.price}
          />
          <br />
          <button onClick={() => addFav(product)}>Add Favorites</button>

          <button onClick={() => addBasket(product)}>Add Basket</button>
        </div>
      ))}
    </div>
  );
}

export { Product };
