import logo from './logo.svg';
import './App.css';
import CustomNavbar from './component/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Products from './component/Products/Products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './component/Footer/Footer';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Basket from './component/Basket/Basket';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <>
    <CustomNavbar/>
    <Router>
    <Switch>
          <Route exact path="/">
            <Products/>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail/>
          </Route>
          <Route exact path="/favorite">
            <Basket/>
          </Route>
          <Route exact path="/basket">
            <Basket/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
    </Switch>
    </Router>
    <Footer/>
    </>
    
  );
}

export default App;
