import React, { useState } from "react";

function CartProductCard({ product, removeFromCart, id }) {
  const { title, price, description, image } = product;

  return (
    <li className="card">
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <h1>Price: ${price}</h1>
      <div className="button-container">
        <button
          onClick={() => removeFromCart(id)}
          className="button-remove-from-cart"
        >
          Remove from Cart 🛒
        </button>
      </div>
    </li>
  );
}

export default CartProductCard;
