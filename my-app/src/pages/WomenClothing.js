import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function WomenClothing() {
  const [womenClothing, setWomenClothing] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((response) => response.json())
      .then((data) => setWomenClothing(data));
  }, []);

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList products={womenClothing} submittedSearch={submittedSearch} />
    </main>
  );
}

export default WomenClothing;
