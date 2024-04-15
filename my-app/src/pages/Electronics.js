import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => setElectronics(data));
  }, []);

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList products={electronics} submittedSearch={submittedSearch} />
    </main>
  );
}

export default Electronics;
