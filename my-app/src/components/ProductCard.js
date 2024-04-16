import React, { useState } from "react";

function ProductCard({ product, addToCart }) {
  const { title, price, description, image } = product;
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <li className="card">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h1>Price: ${price}</h1>
      {showDescription && <p>Description: {description}</p>}
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
