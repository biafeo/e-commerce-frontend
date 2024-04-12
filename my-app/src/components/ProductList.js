import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <ul className="cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} id={product.id} />
      ))}
    </ul>
  );
}
export default ProductList;
