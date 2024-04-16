import CartProductCard from "./CartProductCard";
import { useOutletContext } from "react-router-dom";

function CartProductList() {
  const [products, setProducts, cartProducts, setCartProducts] =
    useOutletContext();

  const removeFromCart = (removeId) => {
    fetch(`http://localhost:3000/cart/${removeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setCartProducts(
            cartProducts.filter(({ id }) => {
              return id !== removeId;
            })
          );
        }
      })
      .catch((error) => console.error(error));
  };
  console.log(products);
  console.log(cartProducts);
  return (
    <ul className="cards">
      {cartProducts
        .filter((c) => products.find((p) => c.productId === p.id))
        .map((c) => {
          const product = products.find((p) => c.productId == p.id);
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
  );
}

export default CartProductList;
