import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function MenClothing() {
  const [menClothing, setMenClothing] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
      .then((response) => response.json())
      .then((data) => setMenClothing(data));
  }, []);

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList products={menClothing} submittedSearch={submittedSearch} />
    </main>
  );
}
export default MenClothing;
