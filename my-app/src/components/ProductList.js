import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductList({
  isInCart,
  products,
  setProducts,
  submittedSearch,
  sortByPrice,
}) {
  const [, , , , addToCart] = useOutletContext();
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortByPrice = () => {
    sortByPrice(sortOrder);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="sort-container">
        <label htmlFor="sort">Sort By Price:</label>
        <select id="sort" onChange={handleSortByPrice} value={sortOrder}>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
      <ul className="cards">
        {products
          .filter((product) => {
            return (
              product.title &&
              product.title
                .toLowerCase()
                .includes(submittedSearch.toLowerCase())
            );
          })
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              id={product.id}
              addToCart={addToCart}
            />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
