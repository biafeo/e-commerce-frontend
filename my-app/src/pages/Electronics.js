import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [sortedElectronics, setSortedElectronics] = useState([]);

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
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedElectronics(sorted);
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
