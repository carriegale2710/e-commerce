import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "../CartItemCard/CartItemCard";
import classes from "./CartList.module.scss";

const CartList = () => {
  const { cart, clearCart } = useContext(CartContext);
  console.log(cart);

  const handleClick = () => {
    console.log("clicked");
    clearCart();
  };
  return (
    <div>
      <h4>Preview data - cart array</h4>
      <pre className={classes.card}>{cart.map((product) => `${product}`)}</pre>
      <h4>Your CartList</h4>
      <section className={classes.grid}>
        {!cart.includes("empty") &&
          cart.map((product) => (
            <CartItemCard key={product.id} productData={product} />
          ))}
        <button onClick={handleClick}>Clear Cart</button>
      </section>
    </div>
  );
};

export default CartList;
