import React, { useState } from "react";

function ProductCard({ product }) {
  const { title, price, category, description, image } = product;

  return (
    <li className="card">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <p>Price:{price}</p>
      <p>Category:{category}</p>
      <p>Description: {description}</p>
    </li>
  );
}
export default ProductCard;
