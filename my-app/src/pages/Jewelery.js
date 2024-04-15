import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Jewelery() {
  const [jewelery, setJewelery] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((data) => setJewelery(data));
  }, []);

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList products={jewelery} submittedSearch={submittedSearch} />
    </main>
  );
}

export default Jewelery;
