import { useState } from "react";
import ProductCard from "./ProductCard";
import CartProductCard from "./CartProductCard";

function ProductList({ isInCart, products, setProducts, submittedSearch }) {
  const addToCart = (product) => {
    // create cart-version of product stripped of product ID
    const cartProduct = { ...product, id: "" };
    const postProductToCart = async () => {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(cartProduct),
      });
      const postedProduct = await response.json();
    };
    postProductToCart();
  };

  const removeFromCart = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setProducts(
            products.filter((product) => {
              return product.id !== id;
            })
          );
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <ul className="cards">
      {products
        .filter((product) => {
          return (
            product.title &&
            product.title.toLowerCase().includes(submittedSearch.toLowerCase())
          );
        })
        .map((product) =>
          isInCart ? (
            <CartProductCard
              key={product.id}
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
            />
          ) : (
            <ProductCard
              key={product.id}
              product={product}
              id={product.id}
              addToCart={() => addToCart(product)}
            />
          )
        )}
    </ul>
  );
}

export default ProductList;
