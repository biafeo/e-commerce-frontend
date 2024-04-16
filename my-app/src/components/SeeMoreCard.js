import React from "react";
import "./SeeMoreCard.css";
import { useOutletContext } from "react-router-dom";

function Stars({ rating }) {
  const filledStars = Math.ceil(rating);
  const emptyStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i}>★</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={filledStars + i}>☆</span>);
  }

  return <div>{stars}</div>;
}

function SeeMoreCard({ product }) {
  const { title, price, description, image, category, rating } = product;
  const [, , cartProducts, setCartProducts, addToCart] = useOutletContext();

  return (
    <li className="see-more-card">
      <div className="left-content">
        <h2>{title}</h2>
        <img src={image} alt={title} />
      </div>
      <div className="right-content">
        <h2>Price: ${price}</h2>
        <h1>Category: {category}</h1>
        <h1>Description: {description}</h1>
        <h1>
          Rating:
          <h3>
            <Stars rating={rating.rate} />
          </h3>
        </h1>
        <h1>Count: {rating.count}</h1>
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

export default SeeMoreCard;
