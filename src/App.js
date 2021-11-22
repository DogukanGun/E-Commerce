import "./App.css";
import { Products, Product, Favorites, Basket } from "./pages";
import { Routes, Route, Link } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/basket">Basket</Link>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
