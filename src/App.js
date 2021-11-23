import "./App.css";
import { Products, Product, Favorites, Basket, Contact } from "./pages";
import { CustomNavbar, CustomFooter } from "./components";
import { Routes, Route, Link } from "react-router-dom";

import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CustomFooter />
      </ProductProvider>
    </div>
  );
}

export default App;
