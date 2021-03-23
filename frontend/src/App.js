import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import cartScreen from './screens/cartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Amazona</Link>
          </div>
          <div>
            <Link to="/Cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/Signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={cartScreen}></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/" component ={HomeScreen} exact></Route> 
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
