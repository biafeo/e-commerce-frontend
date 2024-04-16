import React, { useState, useEffect } from "react";
import CartProductCard from "./CartProductCard";
import { useOutletContext } from "react-router-dom";

function CartProductList() {
  const [products, setProducts, cartProducts, setCartProducts] =
    useOutletContext();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price whenever cartProducts change
  useEffect(() => {
    const newTotalPrice = cartProducts.reduce((total, cartProduct) => {
      const product = products.find((p) => cartProduct.productId === p.id);
      return total + product.price;
    }, 0);
    setTotalPrice(newTotalPrice);
    console.log(newTotalPrice);
  }, [cartProducts, products]);
  const removeFromCart = (removeId) => {
    fetch(`http://localhost:3000/cart/${removeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setCartProducts(cartProducts.filter(({ id }) => id !== removeId));
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      <ul className="cards">
        {cartProducts
          .filter((c) => products.find((p) => c.productId === p.id))
          .map((c) => {
            const product = products.find((p) => c.productId === p.id);
            return (
              <CartProductCard
                key={c.id}
                product={product}
                removeFromCart={removeFromCart}
                id={c.id}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default CartProductList;
