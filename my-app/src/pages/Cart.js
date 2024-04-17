import CartProductList from "../components/CartProductList";
import { useOutletContext } from "react-router-dom";

function Cart() {
  const [, , cartProductIds] = useOutletContext();

  if (!cartProductIds.length) {
    return <h1>Cart is empty!</h1>;
  }

  return (
    <>
      <header>
        <h1>
          Cart: {cartProductIds.length}{" "}
          {cartProductIds.length > 1 ? "items" : "item"}
        </h1>
      </header>
      <main>
        <CartProductList />
      </main>
    </>
  );
}

export default Cart;
