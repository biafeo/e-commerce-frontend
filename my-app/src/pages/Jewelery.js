import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Jewelery() {
  const [jewelery, setJewelery] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [sortedJewelery, setSortedJewelery] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((data) => {
        setJewelery(data);
        setSortedJewelery(data);
      });
  }, []);

  const sortByPrice = (order) => {
    const sorted = [...jewelery].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedJewelery(sorted);
  };

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList
        products={sortedJewelery}
        submittedSearch={submittedSearch}
        sortByPrice={sortByPrice}
      />
    </main>
  );
}

export default Jewelery;
