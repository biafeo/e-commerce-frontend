import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [sortedElectronics, setSortedElectronics] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => {
        setElectronics(data);
        setSortedElectronics(data);
      });
  }, []);

  const sortByPrice = (order) => {
    const sorted = [...electronics].sort((a, b) => {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    });
    setSortedElectronics(sorted);
    setSortOrder(order);
  };

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList
        products={sortedElectronics}
        submittedSearch={submittedSearch}
        sortByPrice={sortByPrice}
      />
    </main>
  );
}

export default Electronics;
