import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";

function Clothing() {
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [menClothing, setMenClothing] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      {
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
        setMenClothing(mensData);
        setWomenClothing(womenData);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Search setSubmittedSearch={setSubmittedSearch} />
      <div>
        <ProductList products={menClothing} submittedSearch={submittedSearch} />
        <ProductList
          products={womenClothing}
          submittedSearch={submittedSearch}
        />
      </div>
    </main>
  );
}

export default Clothing;
