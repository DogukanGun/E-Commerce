import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const values = {
    products,
    setProducts,
    favorites,
    setFavorites,
    basket,
    setBasket,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}

const useProducts = () => useContext(ProductContext);
export { ProductProvider, useProducts };
