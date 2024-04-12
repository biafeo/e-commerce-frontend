import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  if (!products.length) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}

export default Home;
