import CartProductList from "../components/CartProductList";
import { useState, useEffect, useLayoutEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [products, setProducts, cartProductIds, setCartProductIds] =
    useOutletContext();

  if (!cartProductIds.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <h1>Cart: {cartProductIds.length} items</h1>
      </header>
      <main>
        <CartProductList />
      </main>
    </>
  );
}

export default Cart;
