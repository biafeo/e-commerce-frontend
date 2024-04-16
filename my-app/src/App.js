import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { Outlet, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((response) => response.json())
      .then((cartProducts) => {
        setCartProducts(cartProducts);
      });
  }, []);

  const cartCount = cartProducts.length;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar cartCount={cartCount} />
      </header>
      <div>
        <LoginForm />
      </div>
      <main>
        <Outlet
          context={[products, setProducts, cartProducts, setCartProducts]}
        />
      </main>
    </div>
  );
}

export default App;
