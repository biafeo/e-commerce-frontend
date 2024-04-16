import React, { useState } from "react";
import { Link } from "react-router-dom";
import SeeMoreCard from "./SeeMoreCard";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  const { id, title, price, image } = product;
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <li className="card">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h1>Price: ${price}</h1>
      <div className="button-container">
        <button className="button-see-more" onClick={toggleDescription}>
          {showDescription ? "See less" : "See more"}
        </button>
        <button
          onClick={() => addToCart(product)}
          className="button-add-to-cart"
        >
          Add to Cart 🛒
        </button>
      </div>
    </li>
  );
}

export default ProductCard;
