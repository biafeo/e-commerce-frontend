import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Home() {
  const [products, setProducts] = useState([]);
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [sortedHome, setSortedHome] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setSortedHome(data);
      });
  }, []);

  if (!products.length) {
    return <p>Loading...</p>;
  }

  const sortByPrice = (order) => {
    const sorted = [...products].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSortedHome(sorted);
  };

  return (
    <>
      <main>
        <Search setSubmittedSearch={setSubmittedSearch} />
        <ProductList
          products={sortedHome}
          submittedSearch={submittedSearch}
          sortByPrice={sortByPrice}
        />
      </main>
    </>
  );
}

export default Home;
