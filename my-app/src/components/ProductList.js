import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, submittedSearch }) {
  return (
    <ul className="cards">
      {products
        .filter((product) => {
          return (
            product.title &&
            product.title.toLowerCase().includes(submittedSearch.toLowerCase())
          );
        })
        .map((product) => (
          <ProductCard key={product.id} product={product} id={product.id} />
        ))}
    </ul>
  );
}

export default ProductList;
