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
        {showMore ? (
          <SeeMoreCard product={product} removeFromCart={toggleShowMore} />
        ) : (
          <Link
            to={`/product/${id}`}
            className="button-see-more"
            onClick={toggleShowMore}
          >
            See more
          </Link>
        )}
        <button onClick={addToCart} className="button-add-to-cart">
          Add to Cart 🛒
        </button>
      </div>
    </li>
  );
}
export default ProductCard;
