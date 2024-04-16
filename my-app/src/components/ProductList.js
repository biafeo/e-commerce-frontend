import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

function ProductList({ isInCart, products, submittedSearch }) {
  const [, , cartProducts, setCartProducts] = useOutletContext();

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
  );
}

export default ProductList;
