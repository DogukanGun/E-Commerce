import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

function Favorites() {
  const { products, favorites, basket, setBasket } = useProducts();

  const addBasket = (item) => {
    if (products.some((basketItem) => basketItem.id == item.id)) {
      setBasket([...basket, item]);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <Link to="/">Home</Link>
      {favorites.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>

          <br />

          <br />
          <button onClick={() => addBasket(product)}>Add Basket</button>
        </div>
      ))}
    </div>
  );
}

export { Favorites };
