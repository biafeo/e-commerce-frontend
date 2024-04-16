import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductList({
  isInCart,
  products,
  setProducts,
  submittedSearch,
  sortByPrice,
}) {
  const [, , cartProducts, setCartProducts] = useOutletContext();
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortByPrice = () => {
    sortByPrice(sortOrder);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const addToCart = (product) => {
    // create cart-version of product stripped of product ID
    const newCartProduct = { productId: product.id };
    const postProductToCart = async () => {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newCartProduct),
      });
      const postedProduct = await response.json();
      setCartProducts([...cartProducts, postedProduct]);
    };
    postProductToCart();
  };

  return (
 <div>
      <div className="sort-container">
        <label htmlFor="sort">Sort By:</label>
        <select id="sort" onChange={handleSortByPrice} value={sortOrder}>
          <option value="asc">High to Low</option>
          <option value="desc">Low to High</option>
        </select>
      </div>
    <ul className="cards">
      {products
        .filter((product) => {
          return (
            product.title &&
            product.title.toLowerCase().includes(submittedSearch.toLowerCase())
          );
        })
        .map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            id={product.id}
            addToCart={addToCart}
          />
        ))}
    </ul>
</div>
  );
}

export default ProductList;
