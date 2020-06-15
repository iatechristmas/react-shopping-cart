import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductsContext, CartContext } from "./contexts";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation />
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
