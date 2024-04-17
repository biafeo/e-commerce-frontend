import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { Outlet } from "react-router-dom";
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

  const addToCart = (product) => {
    // create cart-version of product stripped of product ID
    const newCartProduct = { productId: product.id };
    const postProductToCart = async () => {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newCartProduct),
      });
      const postedProduct = await response.json();
      setCartProducts([...cartProducts, postedProduct]);
    };
    postProductToCart();
  };

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
          context={[
            products,
            setProducts,
            cartProducts,
            setCartProducts,
            addToCart,
          ]}
        />
      </main>
    </div>
  );
}

export default App;
