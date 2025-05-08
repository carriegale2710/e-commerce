import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "../CartItemCard/CartItemCard";
import classes from "./CartList.module.scss";

const CartList = () => {
  const { cart, clearCart, totalPrice, getTotalPrice } =
    useContext(CartContext);
  console.log(cart);

  const handleClick = () => {
    console.log("clicked");
    clearCart();
  };

  const JSONstring = JSON.stringify(cart, null, 2);
  return (
    <div>
      <h4>Preview data - cart array</h4>
      <pre className={classes.dataPreview}>{JSONstring}</pre>
      <h4>Your CartList</h4>
      <button onClick={handleClick}>Clear Cart</button>
      <section className={classes.grid}>
        {!cart.includes("empty") &&
          cart.map((product) => (
            <CartItemCard key={product.id} productData={product} />
          ))}
      </section>
      <p>Total: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default CartList;
