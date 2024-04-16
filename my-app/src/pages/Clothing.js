import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Clothing() {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [allClothing, setAllClothing] = useState([]);
  const [sortedClothing, setSortedClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mensResponse = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing"
      );
      const womenResponse = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );
      const [mensData, womenData] = await Promise.all([
        mensResponse.json(),
        womenResponse.json(),
      ]);
      const mergedClothing = [...mensData, ...womenData];
      setAllClothing(mergedClothing);
      setSortedClothing(mergedClothing);
    };

    fetchData();
  }, []);

  const sortByPrice = (order) => {
    const sorted = [...allClothing].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedClothing(sorted);
  };

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <ProductList
        products={sortedClothing}
        submittedSearch={submittedSearch}
        sortByPrice={sortByPrice}
      />
    </main>
  );
}

export default Clothing;
