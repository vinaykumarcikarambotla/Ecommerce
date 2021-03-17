import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">Amazona</a>
          </div>
          <div>
            <a href="/Cart">Cart</a>
            <a href="/Signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component ={HomeScreen} exact></Route> 
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
