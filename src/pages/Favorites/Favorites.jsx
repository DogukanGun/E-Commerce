import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { ProductCard } from "../../components";
function Favorites() {
  const { products, favorites, basket, setBasket } = useProducts();

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id == item.id)) {
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
      <h1>Favorites</h1>
      <ul
        style={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {favorites.map((product) => (
          <div key={product.id}>
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
              <ProductCard
                title={product.title}
                src={product.image}
                description={product.description}
                price={product.price}
              />

              <br />
              <button onClick={() => addBasket(product)}>Add Basket</button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export { Favorites };
