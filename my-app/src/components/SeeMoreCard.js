import React from "react";

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

function SeeMoreCard({ product, addToCart }) {
  const { title, price, description, image, category, rating } = product;

  return (
    <li className="see-more-card">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h1>Price: ${price}</h1>
      <h1>Category: {category}</h1>
      <h1>Description: {description}</h1>
      <h1>
        Rating:{" "}
        <p>
          <Stars rating={rating.rate} />
        </p>
      </h1>
      <h1>Count: {rating.count}</h1>
      <button onClick={addToCart} className="button-add-to-cart">
        Add to Cart 🛒
      </button>
    </li>
  );
}

export default SeeMoreCard;
