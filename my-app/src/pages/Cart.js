import ProductList from "../components/ProductList";
import Search from "../components/Search";
import { useState, useEffect } from "react";

function Cart() {
  const [isInCart, setIsInCart] = useState(true);
  const [products, setProducts] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <h1>Cart: {products.length} items</h1>
      </header>
      <main>
        <Search setSubmittedSearch={setSubmittedSearch} />
        <ProductList
          products={products}
          setProducts={setProducts}
          submittedSearch={submittedSearch}
          isInCart={isInCart}
        />
      </main>
    </>
  );
}

export default Cart;
