import React from 'react';
import logo from './logo.svg';
import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Details from './Components/Details';
import Product from './Components/Product';
import ProductList from './Components/ProductList';
import {Switch , Route} from 'react-router-dom';




function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/product" component={Product}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>

          <Product/>
          <ProductList/>
          <Details/>
          <Cart/>
        </Switch>
     </React.Fragment>
  );
}

export default App;
