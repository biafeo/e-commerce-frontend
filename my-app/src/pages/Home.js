import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState(""); // Move useState here

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
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList products={products} submittedSearch={submittedSearch} />
    </main>
  );
}

export default Home;
